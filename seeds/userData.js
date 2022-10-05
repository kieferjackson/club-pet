const { User } = require("../Models");

const userData = [
    {
        id: 1,
        username: 'rolling_star', 
        email: 'prince@cosmos.com',
        password: 'password123',
    },
    {
        id: 2,
        username: 'johnwick4', 
        email: 'johnwick@hotmail.com',
        password: 'r3min6ton',
    },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;