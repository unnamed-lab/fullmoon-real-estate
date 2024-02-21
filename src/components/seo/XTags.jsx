function XTags({title, desc, banner, summary}) {
  return (
    <>
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={banner} />
      <meta name="twitter:card" content={summary} />
    </>
  );
}

export default XTags;
