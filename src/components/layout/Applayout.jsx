import { Outlet } from "react-router-dom";
import { Footer, Nav, TopBtn } from "../ui";
import { useState } from "react";
import "../../styles/css/root.css";

function Applayout() {
  const [customNav, setCustomNav] = useState("");
  return (
    <>
      <Nav customColor={customNav} />
      <Outlet context={[setCustomNav]} />
      <Footer />
      <TopBtn />
    </>
  );
}

export default Applayout;
