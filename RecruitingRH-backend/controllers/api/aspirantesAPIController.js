const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const aspirantesAPIController = {
    list: async (req, res) => {
        try {
            await db.Aspirante.findAll({
                include: ['profesiones', 'sexos'],
            })
                .then((aspirantes) => {
                    let respuesta = {
                        meta: {
                            status: 200,
                            count: aspirantes.length,
                            url: 'http://localhost:3000/api/aspirantes'
                        },
                        data: aspirantes
                    }
                    res.json(respuesta);
                })
        } catch (error) {
            console.log(error);
        }
    },
    detail: async (req, res) => {
        try {
            await db.Aspirante.findByPk(req.params.id,
                {
                    include: ['profesiones', 'sexos'],
                }
            )
                .then(aspirante => {
                    let respuesta = {
                        meta: {
                            status: 200,
                            url: `http://localhost:3000/api/aspirantes/${req.params.id}`
                        },
                        data: aspirante
                    }
                    res.json(respuesta);
                })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = aspirantesAPIController;