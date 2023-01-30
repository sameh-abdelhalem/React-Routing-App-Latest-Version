import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsLayout = () => {
  return (
    <main>
      <EventsNavigation />
      <Outlet />
    </main>
  );
};

export default EventsLayout;
