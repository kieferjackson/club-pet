//CONNECTIONS 
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

//User class inherits from file and extends to model database
class User extends Model { }

//Data critiria for user login,  Basic filler properties to be updated 
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            },
        },
    },
    {
        sequelize,
        timeStamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;