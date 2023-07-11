const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  CreateMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand,
} = require("@aws-sdk/client-s3");
const s3 = require("@aws-sdk/s3-request-presigner");
const { request } = require("https");
const { Blob } = require("node:buffer");
const axios = require("axios");

function StorageService() {
  const s3Params = {
    Bucket: process.env.S3_BUCKET_NAME || "storage-a[i",
    Key: "test",
    Expires: 60 * 60,
    ContentType: "image/*",
  };
  const client = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: process.env.AWS_REGION,
  });
  function _getPresignedUrl() {
    return new Promise(async (resolve, reject) => {
      try {
        const command = new PutObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME || "maloney-storage",
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
  function _getMultipartPresignedUrls(fileKey, fileId, parts) {
    return new Promise(async (resolve, reject) => {
      try {
        const multipartParams = {
          ...s3Params,
          Key: fileKey,
          UploadId: fileId,
        };
        const promises = [];
        for (let index = 0; index < parts; index++) {
          const command = new UploadPartCommand();
          promises.push(
            getSignedUrl(client, command, {
              ...multipartParams,
              PartNumber: index + 1,
            })
          );
        }
        const signedUrls = await Promise.all(promises);
        // assign to each URL the index of the part to which it corresponds
        const partSignedUrlList = signedUrls.map((signedUrl, index) => {
          return {
            signedUrl: signedUrl,
            PartNumber: index + 1,
          };
        });
        resolve(partSignedUrlList);
      } catch (error) {
        return reject(error);
      }
    });
  }

  function _createMultiPartUpload() {
    return new Promise(async (resolve, reject) => {
      try {
        const command = new CreateMultipartUploadCommand({
          Bucket: process.env.S3_BUCKET_NAME || "maloney-storage",
          Key: "test",
          // Expires: 60 * 60,
          ContentType: "image/*",
        });
        const multipartUpload = await client.send(command, {
          expiresIn: process.env.S3_REQUEST_EXPIRES_IN || 6000,
        });
        resolve({
          fileId: multipartUpload.UploadId,
          fileKey: multipartUpload.Key,
        });
      } catch (error) {
        return reject(error);
      }
    });
  }
  function _completeMultipartUpload(fileKey, fileId, parts) {
    return new Promise(async (resolve, reject) => {
      try {
        const multipartParams = {
          ...s3Params,
          Key: fileKey,
          UploadId: fileId,
          MultipartUpload: {
            // ordering the parts to make sure they are in the right order
            Parts: _.orderBy(parts, ["PartNumber"], ["asc"]),
          },
        };
        const command = new CompleteMultipartUploadCommand({
          Bucket: process.env.S3_BUCKET_NAME || "maloney-storage",
          Key: "test",
          // Expires: 60 * 60,
          ContentType: "image/*",
        });
        const multipartUpload = await client.send(command, {
          expiresIn: process.env.S3_REQUEST_EXPIRES_IN || 6000,
        });
        resolve();
      } catch (error) {
        return reject(error);
      }
    });
  }
  function _putObject(url, data) {
    return axios.put(url, data, {
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  }
  const putObjectInS3 = async (file) => {
    try {
      const url = await _getPresignedUrl();
      if (!url) {
        throw new Error("Error due to no url being returned");
      }
      console.log(`Presigned url: ${url}`);
      console.log(`File: ${JSON.stringify(file)}`);
      // console.log(`Buffer: ${file.buffer}`);
      const putRes = await _putObject(url, file.buffer?.data);
      console.log(`putRes: ${putRes.data}`);
    } catch (e) {
      console.error(e);
      throw new Error("Error occurred getting presigned url");
    }
  };
  return Object.freeze({
    getPresignedUrl: _getPresignedUrl,
    putObjectInS3,
  });
}

module.exports = StorageService();
