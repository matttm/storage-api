const dbConfig = require("../../db.config");
const fs = require("fs");
const Sequelize = require("sequelize");

function createDbInstance() {
  return new Promise((res, rej) => {
    const sequelize = new Sequelize(
      dbConfig.DB,
      dbConfig.USER,
      dbConfig.PASSWORD,
      {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        define: {
          timestamps: false,
        },
      }
    );

    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    fs.readdir("./src/database", (err, files) => {
      if (err) {
        console.error("Error: ", err);
        rej(err);
      }
      files = files.filter((f) => !f.includes("index"));
      for (let file of files) {
        console.log(`Loading model ${file}`);
        const partialFileName = file.split(".")[0];
        const model = require(`./${partialFileName}.model`)(
          sequelize,
          Sequelize
        );
        console.log(`model loaded: ${model.name}`);
        module.exports[model.name] = model;
      }
      res(sequelize);
    });
  });
}

module.exports.createDbInstance = createDbInstance;
