const express = require("express");
const router = require("./router");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json()); 

server.use(morgan("dev")); 

server.use(router); 

module.exports = server;
