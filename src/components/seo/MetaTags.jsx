import { Helmet } from "react-helmet-async";
import { getTheme, getURLPath, getURLSource } from "../../utils/navigate";
import logoImg from "../../assets/icons/logo.png";

function MetaTags({ title, desc }) {
  const pageLink = getURLSource();
  const type = "website";
  const schemaObj = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: title,
    description: desc,
    image: {
      "@type": "ImageObject",
      url: logoImg,
      width: "800",
      height: "600",
    },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="theme-color" content={getTheme()} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={getURLPath()} />
        <link rel="apple-touch-icon" href={logoImg} />
        ---------------------------------------------------
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={logoImg} />
        <meta name="twitter:card" content={desc?.slice(0, 120)} />
        ---------------------------------------------------
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={logoImg} />
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
