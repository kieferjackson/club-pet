const { User } = require("../Models");

const userData = [
    {
        username: 'rolling_star', 
        email: 'prince@cosmos.com',
        password: 'password123',
    },
    {
        username: 'johnwick4', 
        email: 'johnwick@hotmail.com',
        password: 'r3min6ton',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;