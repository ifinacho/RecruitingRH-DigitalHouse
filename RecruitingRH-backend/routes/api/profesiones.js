const express = require('express');
const router = express.Router();
const profesionesAPIController = require('../../controllers/api/profesionesAPIController');

//Rutas
router.get('/', profesionesAPIController.list);
router.get('/:id', profesionesAPIController.detail);

module.exports = router;