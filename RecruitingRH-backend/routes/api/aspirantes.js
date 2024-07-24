const express = require('express');
const router = express.Router();
const aspirantesAPIController = require('../../controllers/api/aspirantesAPIController');
const upload = require('../../middlewares/multerMiddleware');

// Rutas
router.get('/', aspirantesAPIController.list);
router.get('/:id', aspirantesAPIController.detail);
router.post('/', upload.single('photo'), aspirantesAPIController.create); // Agrega middleware multer para manejar archivos

module.exports = router;