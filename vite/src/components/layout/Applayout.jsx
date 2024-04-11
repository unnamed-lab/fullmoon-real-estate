import { Outlet } from "react-router-dom";
import { Footer, Nav, TopBtn } from "../ui";
import { useEffect, useState } from "react";
import "../../styles/css/root.css";
import Preloader from "../ui/Preloader";

function Applayout() {
  const [onLoader, setLoader] = useState(false);
  const [customNav, setCustomNav] = useState("");

  useEffect(() => {
    if (!onLoader) {
      setTimeout(() => {
        setLoader(true);
      }, 3220);
    }
  }, [onLoader]);

  return (
    <>
      {!onLoader ? <Preloader /> : ""}
      <Nav customColor={customNav} />
      <Outlet context={[setCustomNav]} />
      <Footer />
      <TopBtn />
    </>
  );
}

export default Applayout;
