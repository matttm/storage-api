const { DataTypes } = require("@sequelize/core");
module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "FileType",
    {
      fileTypeId: {
        columnName: "FILE_TYPE_ID",
        type: DataTypes.STRING,
        primaryKey: true,
        notNull: true,
      },
      fileTypeDesc: {
        columnName: "FILE_TYPE_DESC",
        type: DataTypes.STRING,
        notNull: true,
      },
    },
    {
      tableName: "FILE_TYPE",
    }
  );
};
