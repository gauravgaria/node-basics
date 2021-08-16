const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(adminRoutes);

app.use((req, res, next) => {
  res.send("<h1>hello</h1>");
});

app.listen(8000);
