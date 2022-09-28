//CONNECTIONS
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

//Pet class inherits from file and extends to model database
class Pet extends Model { }

// Basic filler properties to be updated 
Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        about_pet: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pet_name',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Pet',
    }
);
module.exports = Pet;
