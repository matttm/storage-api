const express = require("express");
const fileMetaInfoController = require("./file-meta-info,controller");
const multer = require("multer");

const fileMetaInfoRoutes = express.Router();

fileMetaInfoRoutes.get("/", fileMetaInfoController.getAll);
module.exports = fileMetaInfoRoutes;
