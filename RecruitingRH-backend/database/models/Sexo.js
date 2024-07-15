module.exports = (sequelize, DataTypes) => {
    let alias = 'Sexo';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(64),
            allowNull: true
        }
    };
    let config = {
        tableName : "sexos",
        timestamps: false
    }
    const Sexo = sequelize.define(alias, cols, config);

    // Asociaciones
    Sexo.associate = (models) => {
        Sexo.hasMany(models.Aspirante, {
            as: "aspirantes",
            foreignKey: "sexoId"
        });
    };

    return Sexo;
};