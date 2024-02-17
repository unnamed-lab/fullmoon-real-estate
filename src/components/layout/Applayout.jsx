import { Outlet } from "react-router-dom";
import { Footer, Nav } from "../ui";

function Applayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Applayout;
