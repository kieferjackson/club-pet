const { Model, DataTypes } = require('sequelize');
const seuqlize = require(../config/connection);
const bcrypt = require('bcrypt');

class Pet extends Model { }

Pet.init(
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

        },
    },
    {
        seuqlize,
        modelName: 'Pet',

    }
);

module.exports = Pet;
