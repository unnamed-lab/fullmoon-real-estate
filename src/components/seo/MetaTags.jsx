import { Helmet } from "react-helmet-async";
import { getTheme } from "../../utils/navigate";
import bannerImage from "/thumb_banner.jpg";
import logoImg from "../../assets/icons/logo.png";
import { keywords } from "../../utils/utils";

function MetaTags({
  title = "Fullmoon Real Estate Properties",
  desc = `At Fullmoon Real Estate Properties, we believe in more than just buying and selling properties.`,
  index,
  follow,
}) {
  const banner =
    "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710556288/fullmoon-real-estate/thumb/thumb_banner_ijtpo2.jpg";
  const pageLink = "https://www.fullmoonrealestateproperties.com/";
  const bannerImg =
    import.meta.env.NODE_ENV === "production"
      ? banner
      : `${pageLink}${bannerImage}`;
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
        <link rel="icon" type="image/svg+xml" href={logoImg} />
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta
          name="publisher"
          content="Anuoluwa S. Adebayo - Cypheir Technology"
        />
        <meta name="theme-color" content={getTheme()} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={pageLink} />
        <link rel="apple-touch-icon" href={logoImg} />
        ---------------------------------------------------
        <meta
          name="robots"
          content={`${index ? "index" : "noindex"}, ${
            follow ? "follow" : "nofollow"
          }`}
        />
        <meta
          name="X-Robots-Tag"
          content={`${index ? "index" : "noindex"}, ${
            follow ? "follow" : "nofollow"
          }`}
        />
        <meta name="keywords" content={keywords.join(", ")} />
        ---------------------------------------------------
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={bannerImg} />
        <meta name="twitter:card" content={desc?.slice(0, 120)} />
        ---------------------------------------------------
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={bannerImg} />
        <meta property="og:image:width" content={imgW} />
        <meta property="og:image:height" content={imgH} />
        <meta property="og:url" content={pageLink} />
        <meta property="og:type" content={type} />
        ---------------------------------------------------
        <script type="application/ld+json">{`${JSON.stringify(
          schemaObj
        )}`}</script>
      </Helmet>
    </>
  );
}

export default MetaTags;
