const express = require('express');
const router = express.Router();
const aspirantesAPIController = require('../../controllers/api/aspirantesAPIController');

//Rutas
router.get('/', aspirantesAPIController.list);
router.get('/:id', aspirantesAPIController.detail);

module.exports = router;