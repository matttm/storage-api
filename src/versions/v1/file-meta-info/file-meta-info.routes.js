const express = require("express");
const fileMetaInfoController = require("./file-meta-info,controller");
const multer = require("multer");

const fileMetaInfoRoutes = express.Router();

fileMetaInfoRoutes.get("/", fileMetaInfoController.getAll);
fileMetaInfoRoutes.get("/:id", storageController.getPutPresignedUrl);
module.exports = fileMetaInfoRoutes;
