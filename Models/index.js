const User = require('./User');
const Parent = require('./Parent');
const Pet = require('./Pet');


//data relationships 
Parent.hasMany(Pet, {
    foreignKey: 'User_id',
});

Pet.belongsTo(User, {
    foreignKey: 'User_id',
});

module.exports = { User, Parent, Pet};
