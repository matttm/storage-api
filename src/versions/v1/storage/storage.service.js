const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");

function StorageService() {
  config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
  const s3Params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: process.env.FILENAME,
    Expires: 60 * 60,
    ContentType: "image/*",
  };
  function _getPresignedUrl(s3, s3Params) {
    return new Promise(async (resolve, reject) => {
      try {
        const client = new S3Client({
          credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          },
        });
        const command = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(client, command, { expiresIn: 3600 });
      } catch (error) {
        return reject(error);
      }
    });
  }
  const getPresignedUrl = async () => {
    try {
      const url = await _getPresignedUrl(s3, s3Params);
      if (url) return url;
      throw new Error("Error due to no url being returned");
    } catch (e) {
      console.error(e);
      throw new Error("Error occurred getting presigned url");
    }
  };
  return Object.freeze({
    getPresignedUrl,
  });
}

module.exports = StorageService();
