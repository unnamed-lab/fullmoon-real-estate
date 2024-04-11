import { Hero } from "../components/home";
import bgImg from "../assets/img/banner01.jpg";
import { Intro, ServiceAbout, Team, Testimonial } from "../components/about";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import MetaTags from "../components/seo/MetaTags";

function AboutUs() {
  const [setCustomNav] = useOutletContext();
  useEffect(() => {
    setCustomNav("");
  });
  return (
    <>
      <MetaTags
        title={"Know More About Us - Fullmoon Real Estate"}
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
          About Us
        </h1>
      </Hero>
      <Intro>
        <p>
          At <b>Fullmoon Real Estate Properties</b>, we believe in more than
          just buying and selling properties. We are dedicated to creating
          fulfilling experiences for all our stakeholders - customers, clients,
          agents, and employees alike. Our commitment to excellence,
          professionalism, honesty, and integrity sets us apart in the real
          estate industry.
        </p>
        <p>
          Our mission is clear: to exceed the expectations of all stakeholders
          by providing unparalleled service characterized by excellence,
          professionalism, and unwavering integrity. We prioritize our clients'
          needs above all else, cultivating long-lasting relationships built on
          trust and commitment. Our goal is to ensure every dream becomes a
          reality through cost-effective transactions and unparalleled service
          standards.
        </p>
        <p>
          Our vision extends beyond mere transactions; we aim to address global
          housing challenges with genuine care, transparency, and dedication. We
          strive to surpass client expectations, making home ownership and
          business enhancement seamless and worry-free.
        </p>
        <p>
          Integrity, reliability, transparency, and accountability are the
          cornerstones of our operations. We uphold these values in every
          interaction, fostering a culture of excellence and trust within our
          organization and beyond.
        </p>
      </Intro>
      <Team />
      <ServiceAbout />
      {/* <Testimonial /> */}
    </>
  );
}

export default AboutUs;
