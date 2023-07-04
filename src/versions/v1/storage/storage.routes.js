const express = require("express");
const storageController = require("./storage,controller");

const storageRoutes = express.Router();

storageRoutes.put("/new-file", storageController.getPresignedUrl);

module.exports = storageRoutes;
