import { Helmet } from "react-helmet-async";
import { getTheme } from "../../utils/navigate";
import logoImg from "../../assets/icons/logo.png";
import favicon from "../../assets/icons/favicon.ico";
import { keywords } from "../../utils/utils";

function MetaTags({
  title = "Fullmoon Real Estate Properties",
  desc = `At Fullmoon Real Estate Properties, we believe in more than just buying and selling properties.`,
  index=true,
  follow=true,
}) {
  const bannerImg =
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710556288/fullmoon-real-estate/thumb/thumb_banner_ijtpo2.jpg";
  const pageLink = "https://www.fullmoonrealestateproperties.com";
  const domain = "fullmoonrealestateproperties.com";
  const imgW = "800";
  const imgH = "600";
  const type = "website";
  const schemaObj = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: title,
    description: desc,
    keywords: keywords,
    image: {
      "@type": "ImageObject",
      url: bannerImg,
      width: imgW,
      height: imgH,
    },
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
