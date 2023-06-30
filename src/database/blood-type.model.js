module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "BloodType",
    {
      bloodTypeId: {
        field: "BLOOD_TYPE_ID",
        type: Sequelize.STRING,
        primaryKey: true,
      },
      bloodTypeDesc: {
        field: "BLOOD_TYPE_DESC",
        type: Sequelize.STRING,
      },
    },
    {
      tableName: "BLOOD_TYPE",
    }
  );
};
