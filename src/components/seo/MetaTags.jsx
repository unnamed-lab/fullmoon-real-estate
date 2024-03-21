import { Helmet } from "react-helmet-async";
import { getTheme } from "../../utils/navigate";
import logoImg from "../../assets/icons/logo.png";
import favicon from "../../assets/icons/favicon.ico";
import { keywords } from "../../utils/utils";
import { company } from "../../utils/team";

function MetaTags({
  title = "Fullmoon Real Estate Properties",
  desc = `At Fullmoon Real Estate Properties, we believe in more than just buying and selling properties.`,
  index = true,
  follow = true,
}) {
  const bannerImg =
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710556288/fullmoon-real-estate/thumb/thumb_banner_ijtpo2.jpg";
  const pageLink = "https://www.fullmoonrealestateproperties.com";
  const domain = "fullmoonrealestateproperties.com";
  const imgW = "800";
  const imgH = "600";
  const type = "website";

  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    image: [],
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
    url: pageLink,
    telephone: company.telephone,
    email: company.email,
    logo: `${pageLink}/logo.png`,
    keywords: keywords.join(", "),
    priceRange: "$$$",
    currenciesAccepted: "NGN",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.telephone,
        email: company.email,
        url: `${pageLink}/contact`,
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

  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href={favicon}
          data-react-helmet="true"
        ></link>
        <title>{title}</title>
        <meta name="description" content={desc} data-react-helmet="true" />
        <meta
          name="publisher"
          content="Anuoluwa S. Adebayo - Cypheir Technology"
          data-react-helmet="true"
        />
        <meta
          name="theme-color"
          content={getTheme()}
          data-react-helmet="true"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          data-react-helmet="true"
        />
        <link rel="canonical" href={pageLink} data-react-helmet="true" />
        <link rel="apple-touch-icon" href={logoImg} data-react-helmet="true" />
        ---------------------------------------------------
        <meta
          name="robots"
          content={`${index ? "index" : "noindex"}, ${
            follow ? "follow" : "nofollow"
          }`}
          data-react-helmet="true"
        />
        <meta
          name="X-Robots-Tag"
          content={`${index ? "index" : "noindex"}, ${
            follow ? "follow" : "nofollow"
          }`}
          data-react-helmet="true"
        />
        <meta
          name="keywords"
          content={keywords.join(", ")}
          data-react-helmet="true"
        />
        ---------------------------------------------------
        <meta name="twitter:title" content={title} data-react-helmet="true" />
        <meta
          name="twitter:description"
          content={desc}
          data-react-helmet="true"
        />
        <meta
          name="twitter:image"
          content={bannerImg}
          data-react-helmet="true"
        />
        <meta
          name="twitter:card"
          content={desc?.slice(0, 120)}
          data-react-helmet="true"
        />
        ---------------------------------------------------
        <meta property="og:title" content={title} data-react-helmet="true" />
        <meta
          property="og:description"
          content={desc}
          data-react-helmet="true"
        />
        <meta
          property="og:image"
          content={bannerImg}
          data-react-helmet="true"
        />
        <meta
          property="og:image:width"
          content={imgW}
          data-react-helmet="true"
        />
        <meta
          property="og:image:height"
          content={imgH}
          data-react-helmet="true"
        />
        <meta property="og:url" content={pageLink} data-react-helmet="true" />
        <meta property="og:type" content={type} data-react-helmet="true" />
        ---------------------------------------------------
        <script type="application/ld+json">{`${JSON.stringify(
          schemaObj
        )}`}</script>
      </Helmet>
    </>
  );
}

export default MetaTags;
