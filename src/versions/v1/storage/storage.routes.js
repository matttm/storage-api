const express = require("express");
const storageController = require("./storage,controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const storageRoutes = express.Router();

storageRoutes.put(
  "/presigned-url",
  upload.single("file"),
  storageController.getPresignedUrl
);

storageRoutes.put(
  "/file",
  upload.single("file"),
  storageController.putObjectInS3
);
module.exports = storageRoutes;
