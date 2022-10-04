const router = require('express').Router();
const { User, Pet } = require('../models');

// GET all users including basic pet data (e.g. Username, # of pets, date when last updated, etc)
router.get('/', async (req, res) =>
{
    try
    {
        const userData = await User.findAll({ include: { model: Pet }});

        const users = userData.map( (user) => user.get({ plain: true }));

        // Render all users on the homepage
        res.render('user', { users, loggedIn: req.session.loggedIn, user_id: req.session.user_id });
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/login', (req, res) =>
{
    // Check if the user is logged in, redirect them to the homepage if they already are, otherwise render the login page
    if (req.session.loggedIn)
    {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/my_pets/:id', async (req, res) =>
{
    try
    {
        const userPetData = await User.findByPk(req.params.id, { include: { model: Pet } });
        
        // Check that a user exists with the given ID
        if (!userPetData)
        {
            res.status(404).json({ message: `No user with ID ${req.params.id}` });
            return;
        }

        const { username, id } = userPetData;
        const pets = userPetData.pets.map( (pet) => pet.get({ plain: true }));
        const user_is_owner = id === req.session.user_id;

        res.render('my-pets', { username, pets, user_is_owner, loggedIn: req.session.loggedIn, user_id: req.session.user_id });
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;