module.exports = (sequelize, DataTypes) => {
    let alias = 'Aspirante';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: DataTypes.INTEGER(20),
            allowNull: true
        },
        nombre: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        apellido: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        telefono: {
            type: DataTypes.INTEGER(20),
            allowNull: true
        },
        urlLinkedin: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
            allowNull: true
        },
        imagen: {
            type: DataTypes.STRING(256),
            allowNull: true,
            //defaultValue: "default-image-product.jpg"
        },
        profesionId: {
            type: DataTypes.INTEGER(11)
        },
        sexoId: {
            type: DataTypes.INTEGER(11)
        },
    };
    let config = {
        tableName : "aspirantes",
        timestamps: false,
    };
    const Aspirante = sequelize.define(alias, cols, config);

    // Asociaciones
    Aspirante.associate = (models) => {
        Aspirante.belongsTo(models.Profesion, {
            as: "profesiones",
            foreignKey: "profesionId",
        });
        Aspirante.belongsTo(models.Sexo, {
            as: "sexos",
            foreignKey: "sexoId",
        });
    };

    return Aspirante;
};