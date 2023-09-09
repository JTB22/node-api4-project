const env = require("dotenv").config();
const express = require("express");
const server = express();
const port = process.env.PORT || 9001;

const router = require("./api/server.js");

server.use(express.json());
server.use("/api/users", router);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
