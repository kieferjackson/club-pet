const sequelize = require("./config/connection.js");
const seedUser = require("./userData");
const seedPet = require("./petData"); 
const seedAll = require("./userData.json");


let seedAll = async () => {
    await sequelize.sync({ force: true }); 
    
    await seedUser ();

    await seedPet ();

    process.exit (0);
};

seedAll();