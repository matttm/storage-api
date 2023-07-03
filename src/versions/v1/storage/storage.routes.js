const express = require("express");
const storageController = require("./storage,controller");

const storageRoutes = express.Router();

storageRoutes.get("/presigned-url", storageController.getPresignedUrl);

module.exports = storageRoutes;
