import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  return (
    <main>
      <MainNavigation />
      <Outlet />
    </main>
  );
};

export default RootLayout;
