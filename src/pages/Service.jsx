import { Hero } from "../components/home";
import bgImg from "../assets/img/banner01.jpg";
import { ServiceAbout, Testimonial } from "../components/about";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
function Service() {
  const [setCustomNav] = useOutletContext();
  useEffect(() => {
    setCustomNav("");
  });
  return (
    <>
      <Hero bgImg={bgImg} customStyles={{ height: 40 + "dvh" }}>
        <h3 style={{ textTransform: "uppercase" }}>Services</h3>
      </Hero>
      <ServiceAbout
        header={
          "We Provide Excellent And Professional Services In The Management Of Real Estate Portfolios Across The Country."
        }
        headerStyle={{ textAlign: "center", textTransform: "none" }}
      />
      <Testimonial />
    </>
  );
}

export default Service;
