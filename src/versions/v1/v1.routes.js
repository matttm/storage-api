const { Router } = require("express");
const storageRouter = require("./storage/storage.routes");
const fmiRouter = require("./file-meta-info/file-meta-info.routes");

const v1 = Router();

v1.use("/storage", storageRouter);
v1.use("/file-meta-info", fmiRouter);

module.exports = v1;
