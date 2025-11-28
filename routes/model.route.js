const express = require("express");
const dataController = require("../Controller/data.controller");
const route = express.Router();

route.get("/", dataController.GetData);

route.post("/create", dataController.PostData);

module.exports = route;