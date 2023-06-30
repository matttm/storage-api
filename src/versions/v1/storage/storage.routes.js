const express = require('express');
const StorageController = require('./storage,controller')

const storageRoutes = express.Router();

storageRoutes.get('presigned-url', StorageController.getPresignedUrl);

module.exports = storageRoutes;
