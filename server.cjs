const path = require("path");
const express = require("express");
const app = express();
require("dotenv").config();

app.use(
  require("prerender-node").set("prerenderToken", process.env.PRERENDER_TOKEN)
);



const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Prerender running...`);
});
