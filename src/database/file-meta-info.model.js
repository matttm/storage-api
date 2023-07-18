const { DataTypes } = require("@sequelize/core");
module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "FileMetaInfo",
    {
      fileMetaId: {
        field: "FILE_META_ID",
        type: DataTypes.UUID,
        primaryKey: true,
      },
      fileTypeCd: {
        field: "FILE_TYPE_CD",
        type: DataTypes.INTEGER,
      },
      userId: {
        field: "USER_ID",
        type: DataTypes.INTEGER,
      },
      fileSizeKb: {
        field: "FILE_SIZE_KB",
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      s3BucketName: {
        field: "S3_BUCKET_NAME",
        type: DataTypes.STRING,
        allowNull: true,
      },
      s3ObjectName: {
        field: "S3_OBJECT_NAME",
        type: DataTypes.STRING,
        allowNull: true,
      },
      s3ObjectKey: {
        field: "S3_OBJECT_KEY",
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
      tableName: "FILE_META_INFO",
    }
  );
};
