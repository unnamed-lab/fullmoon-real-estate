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
        title={"Know More About Us"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dicta ducimus aliquid, asperiores praesentium fugiat?"
        }
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
          <b>
            Fullmoon is a premium or real estate agents and landing agencies
          </b>{" "}
          where modern aesthetics are combined with a tasteful simplicity and
          where the ease of use is achieved without compromise in your ability
          to customize the design.
        </p>
        <p>
          Whether you are a real estate agent looking to build a website for
          your company or a web developer seeking a perfect WordPress theme for
          your next project, you are certain to appreciate the numerous features
          and benefits that our theme provides.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          repellat dolorem sequi ducimus iusto maiores obcaecati aspernatur
          nobis eius optio est molestiae laborum, temporibus odio eos minima
          officiis, delectus velit alias, voluptates dolor placeat recusandae.
          Odit adipisci quia rerum maiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel
          recusandae aspernatur ipsam perspiciatis ipsum cupiditate
          reprehenderit! Maiores, modi error.
        </p>
      </Intro>
      <Team />
      <ServiceAbout />
      <Testimonial />
    </>
  );
}

export default AboutUs;
