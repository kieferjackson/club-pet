//CONNECTIONS
const User = require('./User');
const Pet = require('./Pet');
const Species = require('./')


//Data Relationship alias filler 
User.hasMany(Pet, {
    foreignKey: 'owner_id',
});
Pet.belongsTo(User, {
    foreignKey: 'owner_id',
});

Species.hasMany(Pet, {
    foreignKey: 'owner_id',
});

module.exports = { User, Pet, Species};
