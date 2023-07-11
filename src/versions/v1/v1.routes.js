const { Router } = require("express");
const storageRouter = require("./storage/storage.routes");

const v1 = Router();

v1.use("/storage", storageRouter);

module.exports = v1;
