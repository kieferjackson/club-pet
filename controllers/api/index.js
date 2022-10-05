const router = require('express').Router();

const pet_routes = require('./pet-routes');
const user_routes = require('./user-routes');
const species_routes = require('./species-routes');

router.use('/users', user_routes);
router.use('/pets', pet_routes);
router.use('/species', species_routes);

module.exports = router;