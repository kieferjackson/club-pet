const { Pet } = require("./Modles");

const petData = [
    {
        name: 'John Doe',
        owner_id: '1',
        pet_name:  'Doggo',        
    },
];

const seedPet = () => Pet.bulkCreate(petData); 

module.exports = seedPet;
