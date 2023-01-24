import { Outlet } from "react-router-dom";
import EventsNavigation from "./EventsNavigation";

const EventsLayout = () => {
  return (
    <main>
      <EventsNavigation />
      <Outlet />
    </main>
  );
};

export default EventsLayout;
