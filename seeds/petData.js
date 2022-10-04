const { Pet } = require("../Models");

const petData = [
    {
        pet_name: 'Cosmos',
        about_pet: 'Such a great dog! One day, he hopes to be a jazz singer.',
        sex:  'female',
        likes: 1,
        species_id: 1,
        owner_id: 1    
    },
    {
        pet_name: 'King',
        about_pet: 'Did you know that Panda bears are just Polar bears with black spray paint?',
        sex:  'male',
        likes: 5,
        species_id: 5,
        owner_id: 1    
    },
    {
        pet_name: 'Daisy',
        about_pet: 'The last gift from Helen.',
        sex:  'female',
        likes: 17,
        species_id: 1,
        owner_id: 2    
    },
];

const seedPet = () => Pet.bulkCreate(petData); 

module.exports = seedPet;
