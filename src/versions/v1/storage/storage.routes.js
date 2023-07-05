const express = require("express");
const storageController = require("./storage,controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const storageRoutes = express.Router();

storageRoutes.put(
  "/new-file",
  upload.single("file"),
  storageController.getPresignedUrl
);

module.exports = storageRoutes;
