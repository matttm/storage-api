module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "User",
    {
      userId: {
        field: "USER_ID",
        type: Sequelize.UUID,
        primaryKey: true,
      },
      firstName: {
        field: "FIRST_NAME",
        type: Sequelize.STRING,
      },
      lastName: {
        field: "LAST_NAME",
        type: Sequelize.STRING,
      },
      email: {
        field: "EMAIL",
        type: Sequelize.STRING,
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
