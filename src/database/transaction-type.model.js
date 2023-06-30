module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "TransactionType",
    {
      transactionTypeId: {
        field: "TRANSACTION_TYPE_ID",
        type: Sequelize.STRING,
        primaryKey: true,
      },
      transactionTypeDesc: {
        field: "TRANSACTION_TYPE_DESC",
        type: Sequelize.STRING,
      },
    },
    {
      tableName: "TRANSACTION_TYPE",
    }
  );
};
