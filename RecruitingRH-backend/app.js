const express = require('express');
const path = require('path');

const app = express();

const db = require("./database/models");

app.listen(3000, () =>{
    console.log('Servidor corriendo en el puerto 3000...');
});

//Aquí llamo a la ruta de las apis
const apiAspirantesRouter = require('./routes/api/aspirantes')
const apiProfesionesRouter = require('./routes/api/profesiones')
const apiSexosRouter = require('./routes/api/sexos')

//Aquí creo la colección de mis recursos (APIs)
app.use('/api/aspirantes',apiAspirantesRouter);
app.use('/api/profesiones',apiProfesionesRouter);
app.use('/api/sexos',apiSexosRouter);