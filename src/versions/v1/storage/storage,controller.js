const storageService = require("./storage.service");

function StorageController() {
  const getPresignedUrl = async (req, res) => {
    try {
      // console.log(`Request: ${JSON.stringify(res)}`);
      const url = await storageService.getPresignedUrl(req.file);
      return res.status(200).json({
        url,
      });
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  };
  const putObjectInS3 = async (req, res) => {
    try {
      // console.log(`Request: ${JSON.stringify(res)}`);
      const url = await storageService.putObjectInS3(req.file);
      return res.status(200).json({
        url,
      });
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  };
  return Object.freeze({
    getPresignedUrl,
    putObjectInS3,
  });
}

module.exports = StorageController();
