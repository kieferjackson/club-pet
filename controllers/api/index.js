const router = require('express').Router();

const pet_routes = require('./pet-routes');
const user_routes = require('./user-routes');

router.use('/users', user_routes);
router.use('/pets', pet_routes);

module.exports = router;