//CONNECTIONS
const User = require('./User');
const Pet = require('./Pet');
const Species = require('./Species');


//Data Relationship 
User.hasMany(Pet, {
    foreignKey: 'owner_id',
});
Pet.belongsTo(User, {
    foreignKey: 'owner_id',
});

// Pet/Species Relationship
Species.hasMany(Pet, {
    foreignKey: 'species_id',
});
Pet.belongsTo(Species, {
    foreignKey: 'species_id',
});

module.exports = { User, Pet, Species};
