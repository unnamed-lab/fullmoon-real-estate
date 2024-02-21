import { Outlet } from "react-router-dom";
import { Footer, Nav, TopBtn } from "../ui";

function Applayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <TopBtn />
    </>
  );
}

export default Applayout;
