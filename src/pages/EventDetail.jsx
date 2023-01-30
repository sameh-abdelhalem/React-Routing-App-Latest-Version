import { json, useLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
  const params = useParams();
  const data = useLoaderData();
  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "could not fetch event details!" }, { status: 500 });
  } else {
    return response;
  }
};
