//Connections 
const { Model, DataTypes } = require('sequelize');
const seuqlize = require(../config/connection);
const bcrypt = require('bcrypt');

class Parent extends Model {}

//insert code blow// basic properties set up, TBD property names.
Parent.Init(
    {
        id: {
            type: ,
            primaryKey: ,
            
        },
        pet_name: {
            type:

        },
        about_pet: {
            type:

        },
        owner_name: {
            type:

        }
    },
    {
        seuqlize,
        modelName: 'parent',

    }
);

module.exports = Parent;