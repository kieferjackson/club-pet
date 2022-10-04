const { Species } = require("../Models");

const speciesData = [
    {
        name: 'dog'
    },
    {
        name: 'cat'
    },
    {
        name: 'mouse'
    },
    {
        name: 'goldfish'
    },
    {
        name: 'panda bear'
    },
];

const seedSpecies = () => Species.bulkCreate(speciesData); 

module.exports = seedSpecies;