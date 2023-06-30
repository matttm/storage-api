const {config} = require("aws-sdk");
const s3 = require('aws-sdk/clients/s3');


function StorageController() {
    config.update({
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });
    const s3Params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: process.env.FILENAME,
        Expires: 60 * 60,
        ContentType: 'image/*'
    };
    function _getPresignedUrl(s3, s3Params) {
        return new Promise(async (resolve, reject) => {
            try {
                await s3.getSignedUrl('putObject', s3Params, function (err,         data) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(data);
                });
            } catch (error) {
                return reject(error);
            }
        });
    }
    const getPresignedUrl = async () => {
        try {
            const url = await _getPresignedUrl(s3, s3Params);
            if (url) return url;
        } catch (e) {
            console.error(e);
            throw new Error('Error occurred getting presigned url');
        }
    };
    return Object.freeze({
        getPresignedUrl
    });
}

module.exports = StorageController();
