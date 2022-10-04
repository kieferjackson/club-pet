//CONNECTIONS
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

//Pet class inherits from file and extends to model database
class Pet extends Model { }

 
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
        species_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'species',
                key: 'id'
            },
        }, 
        image: {
            type: DataTypes.BLOB('long'),
            // Images for pets are optional to the user
            allowNull: true
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
    }
);

module.exports = Pet;
