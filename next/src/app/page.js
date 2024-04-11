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

  // const products = [
  //   {
  //     title: "Residential land for sale ",
  //     location: "Lekki phase 2 by emerald estate",
  //     description:
  //       "Treasure island estate phase 1 extension more than 200 housing units are projected for delivery in the scheme.",
  //     price: 2000000,
  //     size: "600sqm",
  //     thumbnail: landImg,
  //     isAvailable: true,
  //     hotOffer: false,
  //   },
  //   {
  //     title: "Residential land for sale ",
  //     location: "Lekki phase 2 by emerald estate",
  //     description:
  //       "Treasure island estate phase 1 extension more than 200 housing units are projected for delivery in the scheme.",
  //     price: 2000000,
  //     size: "600sqm",
  //     thumbnail: landImg,
  //     isAvailable: true,
  //     hotOffer: true,
  //   },
  //   {
  //     title: "Residential land for sale ",
  //     location: "Lekki phase 2 by emerald estate",
  //     description:
  //       "Treasure island estate phase 1 extension more than 200 housing units are projected for delivery in the scheme.",
  //     price: 2000000,
  //     size: "600sqm",
  //     thumbnail: landImg,
  //     isAvailable: true,
  //     hotOffer: false,
  //   },
  // ];

  const adverts = [
    {
      info: `When it comes to investing in real estate, there are many factors to consider which includes location, finance, condition of the property, purpose of premises and so on. Knowledge is very important when investing in real estate but what is mostly important is getting the right help and guidance. \n
      This is why Fullmoon real estate 🏡 properties is here to walk you through the path🏡🌇🥰`,
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1712849351/fullmoon-real-estate/adverts/437054064_18392718598076693_3578239639044438744_n_ge4v6g.jpg",
      url: "#",
    },

    {
      info: `Secure your future with FullMoon Real Estate Properties. Invest wisely, build wealth, and watch your dreams become reality. 🌕🏡`,
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1712849359/fullmoon-real-estate/adverts/434493875_18391514368076693_5639847867704432957_n_lgala1.jpg",
      url: "#",
    },

    {
      info: `Easter promo🚀🏡✨

Fullmoon real estate properties 🏡 is offering you an incredible opportunity to own a portion of the future.
Hurry up now and make use of this 10% discount offer, you can secure your spot and enjoy instant allocation. This is your chance to be a proud owner of a land in a sunshine empire location!📍🏡🚀

Original price
🔰N5M
Size 500qm
🔰N3M
Size 300sqm

Promo Price
🔰N4.5M
Size 500sqm
🔰N2.5M
Size 300sqm

BUY & BUILD
Instant allocation

⏰⏳Offer starts from 26th of March to 31st of April`,
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1712849364/fullmoon-real-estate/adverts/431558996_18390318862076693_4252296328898994076_n_ngy8jj.jpg",
      url: "#",
    },

    {
      info: `Begin your real estate journey with us today🚀🏡 By investing in real estate, you're not just acquiring physical assets, you're investing in your own future as real-estate has proven to be a reliable and lucrative 📊💼investment strategy that provides both short-term gains and long-term stability`,
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1712849361/fullmoon-real-estate/adverts/433865188_18389810299076693_5804506987260472397_n_g96i3g.jpg",
      url: "#",
    },
  ];

  const bgImg = [
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1712852714/fullmoon-real-estate/adverts/429776033_18382141249076693_6366554151565576408_n_hbnpuy.jpg",
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1712852782/fullmoon-real-estate/adverts/424612509_18380321275076693_8418883854195931009_n_woehp6.jpg",
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1712852765/fullmoon-real-estate/adverts/424621999_18380632450076693_6467250931109041286_n_sgkrom.jpg",
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1712852671/fullmoon-real-estate/adverts/428496557_18382579594076693_4592233959626087657_n_qb5eof.jpg",
  ];

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
      {adverts?.map((el, index) => {
        return <Advert key={index} info={el.info} img={el.img} url={el.url} />;
      })}
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
