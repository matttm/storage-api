const { createDbInstance } = require("./database");

async function createApp() {
  const instance = await createDbInstance();

  try {
    await instance.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  // these are not being required until the db cinn is
  // is established, so the mw function can get a proper model
  //
  const express = require("express");
  const v1 = require("./versions/v1/v1.routes");

  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/api/v1", v1);

  app.get("/", (req, res) => {
    console.log(req);
    return res.json({ time: Date.now() });
  });
  return app;
}
module.exports = createApp;
