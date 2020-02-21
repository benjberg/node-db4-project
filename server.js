const express = require("express");

const database = require("./data/db-config");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({message: "server running"})
})