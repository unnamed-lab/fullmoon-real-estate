import { Hero } from "../components/home";
import bgImg from "../assets/img/banner01.jpg";
import { ServiceAbout, Testimonial } from "../components/about";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import MetaTags from "../components/seo/MetaTags";
function Service() {
  const [setCustomNav] = useOutletContext();
  useEffect(() => {
    setCustomNav("");
  });
  return (
    <>
      <MetaTags
        title={
          "What We Offer The Best Real Estate Services - Fullmoon Real Estate"
        }
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dicta ducimus aliquid, asperiores praesentium fugiat?"
        }
        index={false}
        follow={false}
      />
      <Hero bgImg={bgImg} customStyles={{ height: 40 + "dvh" }}>
        <h1
          style={{
            textTransform: "uppercase",
            fontSize: 1.875 + "rem",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Services
        </h1>
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
