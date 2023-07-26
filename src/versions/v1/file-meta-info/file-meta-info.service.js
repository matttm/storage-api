const { FileMetaInfo } = require("../../../database");

function FileMetaInfoService() {
  function getAll() {
    try {
      return FileMetaInfo.findAll();
    } catch (e) {
      console.log(e);
      throw new Error("Error retrieving file meta info");
    }
  }
  return Object.freeze({
    getAll,
  });
}

module.exports = FileMetaInfoService();
