"use strict";

export function numberToText(num) {
  return num?.toLocaleString();
}


const keywords = [
  "fullmoon",
  "fullmoon real",
  "fullmoon real estate",
  "fullmoon real estate properties",
  "real estate properties",
  "real estate",
  "we buy land",
  "home selling",
  "house selling",
  "selling my home",
  "selling property",
  "selling a home as is",
  "sale my house",
  "selling home",
  "selling land",
  "sell my house",
  "real estate property",
  "selling my property",
  "buy real estate",
  "buy house",
  "but house as is",
  "buy homes",
  "house for sale",
  "selling your home",
  "real estate services",
  "real estate company",
  "we buy property",
  "selling your property",
  "commercial properties for sale near me",
  "estate agents near me",
  "apartments for sale",
  "new homes for sale near me",
  "land for rent",
  "land buyers",
  "cheap land",
  "vacant land for sale near me",
  "vacant land for sale",
];

export const webData = {
  title: "Fullmoon Real Estate Properties - Secure your dream home with us today",
  desc: "At Fullmoon Real Estate Properties, we believe in more than just buying and selling properties.",
  siteName: "Fullmoon Real Estate Properties",
  url: "https://www.fullmoonrealestateproperties.com/",
  img: {
    url: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1712687138/fullmoon-real-estate/thumb/banner_wzyxj5.png",
    alt: "Fullmoon Real Estate Properties - Build dream home on prime land",
    width: 800,
    height: 600,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.png",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  creator: "@FULLMOONRE2180s",
  keywords: keywords,
};

