"use client";

import Image from "next/image";
import {
  AboutCompany,
  Advert,
  Agents,
  Catalogue,
  Faq,
  Hero,
  Service,
  Welcome,
} from "../../components/home";
import bgBanner from "../../assets/img/banner01.jpg";
import landImg from "../../assets/img/land.png";
import logo from "../../assets/icons/logo.png";
import mouseIcon from "../../assets/icons/mouse.svg";
import userIcon from "../../assets/icons/user.svg";
import clockIcon from "../../assets/icons/clock.svg";
import { SearchField } from "../../components/forms";
import { ContactText } from "../../components/ui";

function Home() {
  const services = [
    {
      title: "Commitment to Excellence",
      description:
        "We prioritize professionalism, honesty, and integrity, aiming to surpass expectations in every interaction with stakeholders",
      icon: mouseIcon,
    },
    {
      title: "Customer-Centric Focus",
      description:
        "Our approach revolves around addressing the needs and concern of our clients, fostering trust and long-term relationships through dedicated service",
      icon: clockIcon,
    },
    {
      title: "Efficiency and Satisfaction",
      description:
        "Our goal is to achieve high levels of client retention and satisfaction by ensuring transactions are cost-effective while upholding service quality standards.",
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
  ];

  const bgImg = [bgBanner, bgBanner, bgBanner];

  return (
    <>
      <Hero bgImg={bgImg} slider={true}>
        <h1>Build your dream home on the finest property</h1>
        <h2>
          At Fullmoon Real Estate Properties, we believe in more than just
          buying and selling properties.
        </h2>
        {/* <SearchField /> */}
      </Hero>
      <Welcome
        title="Welcome To Fullmoon Real Estate Properties"
        desc="Fullmoon Real Estate Properties is a real estate development, management, and investment company."
      />
      <Advert />
      <AboutCompany logo={logo} content={services} />
      {/* <Catalogue products={products} /> */}
      <Service />
      {/* <Agents /> */}
      <Faq />
      <ContactText />
    </>
  );
}

export default Home;
