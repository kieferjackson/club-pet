const sequelize = require("./config/connection.js");
const seedUser = require("./userData");
const seedPet = require("./petData"); 
const userData = require("./userData.json");

//CHECK seed files and values, check terminal to see if listening or connected  
let seedAll = async () => {
    await sequelize.sync({ force: false }); //changed to false, to run tests
    
    await seedUser ();

    await seedPet ();

    process.exit (0);
};

seedAll();