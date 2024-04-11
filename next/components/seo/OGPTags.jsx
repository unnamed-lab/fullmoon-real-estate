function OGPTags({ title, desc, page, type = "website", banner }) {
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={banner} />
      <meta property="og:url" content={page} />
      <meta property="og:type" content={type} />
    </>
  );
}

export default OGPTags;
