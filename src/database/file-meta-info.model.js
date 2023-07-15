module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "FileMetaInfo",
    {
      fileMetaId: {
        field: "FILE_META_ID",
        type: Sequelize.UUID,
        primaryKey: true,
      },
      fileTypeCd: {
        field: "FILE_TYPE_CD",
        type: Sequelize.INTEGER,
      },
      userId: {
        field: "USER_ID",
        type: Sequelize.INTEGER,
      },
      fileSizeKb: {
        field: "FILE_SIZE_KB",
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      s3BucketName: {
        field: "S3_BUCKET_NAME",
        type: Sequelize.STRING,
        allowNull: true,
      },
      s3ObjectName: {
        field: "S3_OBJECT_NAME",
        type: Sequelize.STRING,
        allowNull: true,
      },
      s3ObjectKey: {
        field: "S3_OBJECT_KEY",
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
      tableName: "FILE_META_INFO",
    }
  );
};
