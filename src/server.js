const createApp = require("./app");
(async () => {
  console.log("Creating app");
  const app = await createApp();
  app.listen(3000, () => console.log(`Listening on: 3000`));
})();
