const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const db = require("./database/models");

// Configuración para servir archivos estáticos
const publicPath = path.resolve(__dirname, './public'); 
app.use(express.static(publicPath));

// Configuración de CORS
app.use(cors());

// Middleware para analizar cuerpos de solicitud JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de las APIs
const apiAspirantesRouter = require('./routes/api/aspirantes');
const apiProfesionesRouter = require('./routes/api/profesiones');
const apiSexosRouter = require('./routes/api/sexos');

// Configuración de las rutas
app.use('/api/aspirantes', apiAspirantesRouter);
app.use('/api/profesiones', apiProfesionesRouter);
app.use('/api/sexos', apiSexosRouter);

// Inicio del servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000...');
});
