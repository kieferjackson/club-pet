const router = require('express').Router();
const { User, Pet } = require('../models');

// GET all users including basic pet data (e.g. Username, # of pets, date when last updated, etc)
router.get('/', async (req, res) =>
{
    try
    {
        const userData = await User.findAll({ include: { model: Pet }});

        const users = userData.map( (user) => user.get({ plain: true }));

        res.status(200).json(users);
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;