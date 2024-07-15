const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const sexosAPIController = {
    list: async (req, res) => {
        try {
            await db.Sexo.findAll()
                .then((sexos) => {
                    let respuesta = {
                        meta: {
                            status: 200,
                            count: sexos.length,
                            url: 'http://localhost:3000/api/sexos'
                        },
                        data: sexos
                    }
                    res.json(respuesta);
                })
        } catch (error) {
            console.log(error);
        }
    },
    detail: async (req, res) => {
        try {
            await db.Sexo.findByPk(req.params.id)
                .then(sexo => {
                    let respuesta = {
                        meta: {
                            status: 200,
                            url: `http://localhost:3000/api/sexos/${sexo.id}`
                        },
                        data: sexo
                    }
                    res.json(respuesta);
                })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = sexosAPIController;