const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");
const { request } = require("https");
const { Blob } = require("node:buffer");

function StorageService() {
  // config.update({
  //   region: process.env.AWS_REGION,
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  // });
  const s3Params = {
    Bucket: process.env.S3_BUCKET_NAME || "storage-a[i",
    Key: "test",
    Expires: 60 * 60,
    ContentType: "image/*",
  };

  function _getPresignedUrl() {
    return new Promise(async (resolve, reject) => {
      try {
        const client = new S3Client({
          credentials: {
            region: process.env.AWS_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          },
        });
        const command = new PutObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME || "storage-api",
          Key: "test",
          // Expires: 60 * 60,
          ContentType: "image/*",
        });
        const url = await getSignedUrl(client, command, {
          expiresIn: process.env.S3_REQUEST_EXPIRES_IN || 6000,
        });
        resolve(url);
      } catch (error) {
        return reject(error);
      }
    });
  }
  function _putObject(url, data) {
    return new Promise((resolve, reject) => {
      const req = request(
        url,
        { method: "PUT", headers: { "Content-Length": new Blob([data]).size } },
        (res) => {
          let responseBody = "";
          res.on("data", (chunk) => {
            responseBody += chunk;
          });
          res.on("end", () => {
            resolve(responseBody);
          });
        }
      );
      req.on("error", (err) => {
        reject(err);
      });
    });
  }
  const putObjectInS3 = async (file) => {
    try {
      const url = await _getPresignedUrl();
      await _putObject(url, file);
      throw new Error("Error due to no url being returned");
    } catch (e) {
      console.error(e);
      throw new Error("Error occurred getting presigned url");
    }
  };
  return Object.freeze({
    putObjectInS3,
  });
}

module.exports = StorageService();
