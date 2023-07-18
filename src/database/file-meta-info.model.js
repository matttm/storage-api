const { DataTypes } = require("@sequelize/core");
module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "FileMetaInfo",
    {
      fileMetaId: {
        columnName: "FILE_META_ID",
        type: DataTypes.UUID,
        primaryKey: true,
      },
      fileTypeCd: {
        columnName: "FILE_TYPE_CD",
        type: DataTypes.INTEGER,
      },
      userId: {
        columnName: "USER_ID",
        type: DataTypes.INTEGER,
      },
      fileSizeKb: {
        columnName: "FILE_SIZE_KB",
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      s3BucketName: {
        columnName: "S3_BUCKET_NAME",
        type: DataTypes.STRING,
        allowNull: true,
      },
      s3ObjectName: {
        columnName: "S3_OBJECT_NAME",
        type: DataTypes.STRING,
        allowNull: true,
      },
      s3ObjectKey: {
        columnName: "S3_OBJECT_KEY",
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        columnName: "CREATED_AT",
        type: "TIMESTAMP",
        allowNull: false,
      },
      updatedAt: {
        columnName: "UPDATED_AT",
        type: "TIMESTAMP",
        allowNull: false,
      },
    },
    {
      tableName: "FILE_META_INFO",
    }
  );
};
