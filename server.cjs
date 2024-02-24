const path = require("path");
const express = require("express");
const app = express();

app.use(
  require("prerender-node").set("prerenderToken", "jYu4CBC5011P3491J9pv")
);

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Prerender running...`);
// });
