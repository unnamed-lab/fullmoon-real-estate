import {
  AboutCompany,
  Agents,
  Catalogue,
  Faq,
  Hero,
  Service,
} from "../components/home";
import bgImg from "../assets/img/banner01.jpg";
import landImg from "../assets/img/land.png";
import logo from "../assets/icons/logo.png";
import { SearchField } from "../components/forms";

function Home() {
  const services = [
    {
      title: "OPERATIONAL EXCELLENCE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necullamcorper mattis, pulvinar dapibus leo.",
      icon: "",
    },
    {
      title: "CONTINUOUS IMPROVEMENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necullamcorper mattis, pulvinar dapibus leo.",
      icon: "",
    },
    {
      title: "INNOVATIVE SOLUTIONS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necullamcorper mattis, pulvinar dapibus leo.",
      icon: "",
    },
  ];

  const products = [
    {
      title: "Residential land for sale ",
      location: "Lekki phase 2 by emerald estate",
      description:
        "Treasure island estate phase 1 extension more than 200 housing units are projected for delivery in the scheme.",
      price: 2000000,
      size: "600sqm",
      thumbnail: landImg,
      isAvailable: true,
      hotOffer: false,
    },
    {
      title: "Residential land for sale ",
      location: "Lekki phase 2 by emerald estate",
      description:
        "Treasure island estate phase 1 extension more than 200 housing units are projected for delivery in the scheme.",
      price: 2000000,
      size: "600sqm",
      thumbnail: landImg,
      isAvailable: true,
      hotOffer: true,
    },
    {
      title: "Residential land for sale ",
      location: "Lekki phase 2 by emerald estate",
      description:
        "Treasure island estate phase 1 extension more than 200 housing units are projected for delivery in the scheme.",
      price: 2000000,
      size: "600sqm",
      thumbnail: landImg,
      isAvailable: true,
      hotOffer: false,
    },
    {
      title: "Residential land for sale ",
      location: "Lekki phase 2 by emerald estate",
      description:
        "Treasure island estate phase 1 extension more than 200 housing units are projected for delivery in the scheme.",
      price: 2000000,
      size: "600sqm",
      thumbnail: landImg,
      isAvailable: true,
      hotOffer: false,
    },
  ];

  return (
    <>
      <Hero bgImg={bgImg}>
        <h1>Build your dream home on the finest property</h1>
        <SearchField />
      </Hero>
      <AboutCompany logo={logo} content={services} />
      <Catalogue products={products} />
      <Service />
      <Agents />
      <Faq />
    </>
  );
}

export default Home;
