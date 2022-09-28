const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedPet = require("./petData");

const userData = require("./userData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await seedUser();

    await seedPet();

    process.exit(0);
};

seedAll();