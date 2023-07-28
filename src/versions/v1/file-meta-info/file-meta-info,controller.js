const fileMetaInfoService = require("./file-meta-info.service");

function FileMetaInfoController() {
  const getAll = async (req, res) => {
    try {
      const url = await fileMetaInfoService.getAll();
      return res.status(200).json({
        url,
      });
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  };
  return Object.freeze({
    getAll,
  });
}

module.exports = FileMetaInfoController();
