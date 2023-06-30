const express = require('express');

const storageRoutes = express.Router();

storageRoutes.get('presigned-url', null);

module.exports = storageRoutes;
