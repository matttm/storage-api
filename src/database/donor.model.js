module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "Donor",
    {
      donorId: {
        field: "DONOR_ID",
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
      bloodType: {
        field: "BLOOD_TYPE",
        type: Sequelize.STRING,
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
      tableName: "DONOR",
    }
  );
};
