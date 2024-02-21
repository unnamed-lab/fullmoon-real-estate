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
import mouseIcon from "../assets/icons/mouse.svg";
import userIcon from "../assets/icons/user.svg";
import clockIcon from "../assets/icons/clock.svg";
import { SearchField } from "../components/forms";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import MetaTags from "../components/seo/MetaTags";

function Home() {
  const [setCustomNav] = useOutletContext();
  useEffect(() => {
    setCustomNav("");
  });
  const services = [
    {
      title: "OPERATIONAL EXCELLENCE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necullamcorper mattis, pulvinar dapibus leo.",
      icon: mouseIcon,
    },
    {
      title: "CONTINUOUS IMPROVEMENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necullamcorper mattis, pulvinar dapibus leo.",
      icon: clockIcon,
    },
    {
      title: "INNOVATIVE SOLUTIONS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necullamcorper mattis, pulvinar dapibus leo.",
      icon: userIcon,
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
      <MetaTags
        title={
          "Fullmoon Real Estate - Build your dream home on the finest property"
        }
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dicta ducimus aliquid, asperiores praesentium fugiat?"
        }
        index={true}
        follow={true}
      />
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
