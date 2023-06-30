module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "Transaction",
    {
      transactionId: {
        field: "TRANSACTION_ID",
        type: Sequelize.UUID,
        primaryKey: true,
      },
      transactionType: {
        field: "TRANSACTION_TYPE",
        type: Sequelize.STRING,
        allowNull: false,
      },
      donorId: {
        field: "DONOR_ID",
        type: Sequelize.UUID,
        allowNull: false,
      },
      bloodAmountML: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: "TIMESTAMP",
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP",
        allowNull: false,
      },
    },
    {
      tableName: "TRANSACTION",
    }
  );
};
