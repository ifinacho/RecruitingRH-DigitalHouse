const express = require('express');
const router = express.Router();
const sexosAPIController = require('../../controllers/api/sexosAPIController');

//Rutas
router.get('/', sexosAPIController.list);
router.get('/:id', sexosAPIController.detail);

module.exports = router;