const router = require('express').Router();

const api_routes = require('./api');
const home_routes = require('./home-routes.js');

router.use('/', home_routes);
router.use('/api', api_routes);

module.exports = router;