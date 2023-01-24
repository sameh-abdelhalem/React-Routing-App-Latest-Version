import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", description: "book fare" },
  { id: "e2", description: "Mega R and R" },
  { id: "e3", description: "Padel Tournament" },
];
const EventPage = () => {
  return (
    <ul>
      {EVENTS.map((e) => (
        <li>
          <Link to={`/events/${e.id}`}>{e.description}</Link>
        </li>
      ))}
    </ul>
  );
};

export default EventPage;
