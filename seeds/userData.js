const { User } = require("../Models");

const userData = [
    {
        name: 'John Doe', 
        owner_id: '1',
        num_pet: '4',
    },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;