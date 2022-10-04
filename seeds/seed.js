const sequelize = require("../config/connection.js");
const seedUser = require("./userData");
const seedSpecies = require("./speciesData"); 
const seedPet = require("./petData"); 

//CHECK seed files and values, check terminal to see if listening or connected  
let seedAll = async () => {
    await sequelize.sync({ force: false }); //changed to false, to run tests
    
    await seedUser ();

    await seedSpecies ();

    await seedPet ();

    process.exit (0);
};

seedAll();