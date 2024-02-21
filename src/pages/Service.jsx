import { Hero } from "../components/home";
import bgImg from "../assets/img/banner01.jpg";
import { ServiceAbout, Team, Testimonial } from "../components/about";
function Service() {
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
