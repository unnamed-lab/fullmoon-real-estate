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
  domain: "fullmoonrealestateproperties.com",
  type: "website",
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

/*
const schemaObj = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Fullmoon Real Estate Properties",
  image: [
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710556288/fullmoon-real-estate/thumb/thumb_banner_ijtpo2.jpg",
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1711006887/fullmoon-real-estate/thumb/vlcsnap-2024-03-20-23h33m04s102_wioc5l.png",
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1711006863/fullmoon-real-estate/thumb/vlcsnap-2024-03-20-23h32m47s734_zuzvpd.png",
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1711006865/fullmoon-real-estate/thumb/vlcsnap-2024-03-20-23h33m35s734_grfc0i.png",
  ],
  legalName: "Fullmoon Real Estate Properties",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Block A2 suite 337 HFP Eastline Shopping Complex Abraham Adesanya, Ajah",
    addressLocality: "Lagos",
    addressRegion: "LG",
    postalCode: "100246",
    addressCountry: "NG",
  },
  // review: {
  //   "@type": "Review",
  //   reviewRating: {
  //     "@type": "Rating",
  //     ratingValue: "4",
  //     bestRating: "5",
  //   },
  //   author: {
  //     "@type": "Person",
  //     name: "Lillian Ruiz",
  //   },
  // },
  // geo: {
  //   "@type": "GeoCoordinates",
  //   latitude: 40.761293,
  //   longitude: -73.982294,
  // },
  // telephone: company.telephone,
  // email: company.email,
  // logo: `${pageLink}/logo.png`,
  keywords: ["fullmoon real estate properties"],
  // description: desc,
  priceRange: "$$$",
  currenciesAccepted: "NGN",
  contactPoint: [
    {
      "@type": "ContactPoint",
      // telephone: company.telephone,
      // email: company.email,
      // url: `${pageLink}/contact`,
      contactType: "customer service",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};
*/