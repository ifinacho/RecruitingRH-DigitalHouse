module.exports = (sequelize, DataTypes) => {
    let alias = 'Profesion';
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
        tableName : "profesiones",
        timestamps: false
    }
    const Profesion = sequelize.define(alias, cols, config);

    // Asociaciones
    Profesion.associate = (models) => {
        Profesion.hasMany(models.Aspirante, {
            as: "aspirantes",
            foreignKey: "profesionId"
        });
    };

    return Profesion;
};