//CONNECTIONS
const User = require('./User');
const Parent = require('./Parent');
const Pet = require('./Pet');


//Data Relationship alias filler 
User.hasMany(Parent, Pet, {
    foreignKey: 'User_id',
});

Parent.hasMany(Pet, {
    foreignKey: 'User_id',
});

Pet.belongsTo(User, {
    foreignKey: 'owner_id',
});

module.exports = { User, Parent, Pet};
