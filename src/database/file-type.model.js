module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "FileType",
    {
      bloodTypeId: {
        field: "FILE_TYPE_ID",
        type: Sequelize.STRING,
        primaryKey: true,
        notNull: true,
      },
      bloodTypeDesc: {
        field: "FILE_TYPE_DESC",
        type: Sequelize.STRING,
        notNull: true,
      },
    },
    {
      tableName: "FILE_TYPE",
    }
  );
};