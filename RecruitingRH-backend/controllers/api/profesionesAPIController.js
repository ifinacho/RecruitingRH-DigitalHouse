const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const profesionesAPIController = {
    list: async (req, res) => {
        try {
            await db.Profesion.findAll()
                .then((profesiones) => {
                    let respuesta = {
                        meta: {
                            status: 200,
                            count: profesiones.length,
                            url: 'http://localhost:3000/api/profesiones'
                        },
                        data: profesiones
                    }
                    res.json(respuesta);
                })
        } catch (error) {
            console.log(error);
        }
    },
    detail: async (req, res) => {
        try {
            await db.Profesion.findByPk(req.params.id)
                .then(profesion => {
                    let respuesta = {
                        meta: {
                            status: 200,
                            url: `http://localhost:3000/api/profesiones/${profesion.id}`
                        },
                        data: profesion
                    }
                    res.json(respuesta);
                })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = profesionesAPIController;