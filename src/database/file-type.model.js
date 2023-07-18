const { DataTypes } = require("@sequelize/core");
module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "FileType",
    {
      fileTypeId: {
        field: "FILE_TYPE_ID",
        type: DataTypes.STRING,
        primaryKey: true,
        notNull: true,
      },
      fileTypeDesc: {
        field: "FILE_TYPE_DESC",
        type: DataTypes.STRING,
        notNull: true,
      },
    },
    {
      tableName: "FILE_TYPE",
    }
  );
};
