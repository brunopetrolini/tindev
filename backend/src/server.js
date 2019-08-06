//35:55
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://petrolini:petrolini@tindev-36de8.mongodb.net/tindev?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

server.use(express.json());
server.use(routes);

server.listen(3333);
