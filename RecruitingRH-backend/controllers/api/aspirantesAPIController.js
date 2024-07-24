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
                    let result = aspirantes.map(aspirante => {
                        return {
                            ...aspirante.dataValues, // Copia todas las propiedades existentes
                            imagenURL: `http://localhost:3000/images/aspirantes/${aspirante.imagen}` // Agrega una nueva propiedad
                        };
                    });
                    let respuesta = {
                        meta: {
                            status: 200,
                            count: result.length,
                            url: 'http://localhost:3000/api/aspirantes'
                        },
                        data: result
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
                    aspirante.dataValues.imagenURL = `http://localhost:3000/images/aspirantes/${aspirante.imagen}`
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
    },
    create: async (req, res) => {
        try {
            const { nombre, apellido, dni, email, telefono, urlLinkedin, fechaNacimiento, profesionId, sexoId } = req.body;
            const imagen = req.file ? req.file.filename : null;

            // Validar que se recibieron los datos necesarios
            if (!nombre || !apellido || !dni || !email || !telefono || !urlLinkedin || !fechaNacimiento || !profesionId || !sexoId) {
                return res.status(400).json({ error: "Faltan datos requeridos." });
            }

            const nuevoAspirante = await db.Aspirante.create({
                nombre,
                apellido,
                dni,
                email,
                telefono,
                urlLinkedin,
                fechaNacimiento,
                imagen,
                profesionId,
                sexoId
            });

            res.status(201).json({
                meta: {
                    status: 201,
                    url: `http://localhost:3000/api/aspirantes/${nuevoAspirante.id}`
                },
                data: nuevoAspirante
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Error al crear el aspirante." });
        }
    }
}

module.exports = aspirantesAPIController;