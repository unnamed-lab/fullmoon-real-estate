import { useOutletContext } from "react-router-dom";
import { SearchField } from "../components/forms";
import { Catalogue, Hero } from "../components/home";
import { useEffect } from "react";
import landImg from "../assets/img/land.png";
import MetaTags from "../components/seo/MetaTags";

function Buy() {
  const [setCustomNav] = useOutletContext();
  useEffect(() => {
    setCustomNav("#00335a");
  });

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
        title={"Buy Your Landed Properties"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dicta ducimus aliquid, asperiores praesentium fugiat?"
        }
      />
      <Hero
        backdrop={false}
        customStyles={{ height: 45 + "dvh", justifyContent: "flex-end" }}
        customContainerStyles={{ marginBottom: 1 + "rem" }}
      >
        <h1
          style={{
            textTransform: "none",
            textAlign: "left",
            margin: 0,
            color: "#00335a",
            letterSpacing: 3 + "px",
            fontSize: 1.875 + "rem",
          }}
        >
          Discover new lands
        </h1>
        <SearchField
          filter={false}
          customStyles={{ width: 100 + "%", padding: "0.25rem 0" }}
        />
      </Hero>
      <Catalogue
        products={products}
        customStyles={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
        header={false}
      />
    </>
  );
}

export default Buy;
