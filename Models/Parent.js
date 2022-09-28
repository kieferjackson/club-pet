//CONNECTIONS
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

//Parent class inherits from file and extends to model database
class Parent extends Model {}

// Basic filler properties to be updated 
Parent.init(
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
        num_pet: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },  
        parent_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'owner_name',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableNames: true,
        underscored: true,
        modelName: 'parent',
    }
);
module.exports = Parent;