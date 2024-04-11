function SchemaMarkup() {
  const schemaObj = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: "Your Title",
    description: "Your Description",
    image: {
      "@type": "ImageObject",
      url: "URL to Your Image",
    },
  };
  return (
    <>
      <script type="application/ld+json">{schemaObj}</script>
    </>
  );
}

export default SchemaMarkup;
