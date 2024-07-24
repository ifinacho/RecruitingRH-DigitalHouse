const multer = require('multer');
const path = require('path');

// Configuración de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/aspirantes'); // Cambia esto según tu estructura de carpetas
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Agrega una marca de tiempo al nombre del archivo
    }
});

const upload = multer({ storage });

// Exporta la configuración de multer
module.exports = upload;
