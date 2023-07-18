const { DataTypes } = require("@sequelize/core");
module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "User",
    {
      userId: {
        field: "USER_ID",
        type: DataTypes.UUID,
        primaryKey: true,
      },
      firstName: {
        field: "FIRST_NAME",
        type: DataTypes.STRING,
      },
      lastName: {
        field: "LAST_NAME",
        type: DataTypes.STRING,
      },
      email: {
        field: "EMAIL",
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        field: "CREATED_AT",
        type: "TIMESTAMP",
        allowNull: false,
      },
      updatedAt: {
        field: "UPDATED_AT",
        type: "TIMESTAMP",
        allowNull: false,
      },
    },
    {
      tableName: "USER",
    }
  );
};
