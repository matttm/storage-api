const express = require("express");
const storageController = require("./storage,controller");
const multer = require("multer");
const upload = multer({});

const storageRoutes = express.Router();

storageRoutes.get("/presigned-url", storageController.getPresignedUrl);

storageRoutes.put(
  "/file",
  upload.single("file"),
  storageController.putObjectInS3
);
module.exports = storageRoutes;
