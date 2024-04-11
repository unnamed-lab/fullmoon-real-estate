import { Faq, Hero } from "../../../components/home";
import bgImg from "../../../assets/img/banner01.jpg";
import { ServiceAbout, Testimonial } from "../../../components/about";

const webData = {
  title: "What We Offer The Best Real Estate Services - Fullmoon Real Estate",
};

export const metadata = {
  title: webData.title,
  openGraph: {
    title: webData.title,
    locale: "en_UK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: webData.title,
  },
};

function Service() {
  
  return (
    <>
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
      <Faq />
      {/* <Testimonial /> */}
    </>
  );
}

export default Service;
