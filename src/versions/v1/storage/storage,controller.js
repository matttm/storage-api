const storageService = require("./storage.service");

function StorageController() {
  const getPutPresignedUrl = async (req, res) => {
    try {
      console.log(req);
      const url = await storageService.getPutPresignedUrl(req.file);
      return res.status(200).json({
        url,
      });
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  };
  const getGetPresignedUrl = async (req, res) => {
    try {
      const {
        body: { filename, mimetype },
      } = req;
      const file = {
        originalname: filename,
        mimetype,
      };
      const url = await storageService.getGetPresignedUrl(file);
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
      await storageService.putObjectInS3(req.file);
      return res.status(200).json();
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  };
  return Object.freeze({
    getPutPresignedUrl,
    getGetPresignedUrl,
    putObjectInS3,
  });
}

module.exports = StorageController();
