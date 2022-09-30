const sequelize = require("../config/connection.js");
const seedUser = require("../userData");
const seedPet = require("../petData");
const seedDatabase = require("../db");  // created value for seedDatabase 

const userData = require("./userData.json");

//CHECK seed files and values, check terminal to see if listening or connected  
let seedDatabase = async () => {
    await sequelize.sync({ force: false }); //changed to false, to run tests
    
    await seedUser ();

    await seedPet ();

    process.exit (0);
};

seedAll();