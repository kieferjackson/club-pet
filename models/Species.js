const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Species extends Model { }

Species.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'species'
    }
);

module.exports = Species;