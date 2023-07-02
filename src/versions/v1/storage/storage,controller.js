const storageService = require("./storage.service");

function StorageController() {
  const getPresignedUrl = async (req, res) => {
    try {
      const url = await storageService.getPresignedUrl();
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
  });
}

module.exports = StorageController();
