//CONNECTIONS
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
// const bcrypt = require('bcrypt'); //Rmoved there is no bcyprt declared in file 

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
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
    }
);
module.exports = Pet;
