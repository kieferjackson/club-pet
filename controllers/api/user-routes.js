const router = require('express').Router();
const { User } = require('../../models');

// POST a new user
router.post('/', async (req, res) =>
{
    try
    {
        const newUser = await User.create
        (
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        );

        // Log the user into the website now that they have been added
        req.session.save( () =>
        {
            req.session.loggedIn = true;
            req.session.user_id = newUser.id;

            res.status(200).json(newUser);
        });
    }
    catch (error)
    {
        console.log(error)
        res.status(500).json(error);
    }
});

// POST a user's login request
router.post('/login', async (req, res) =>
{
    try
    {
        // Query the user based on given email address
        const userToLogin = await User.findOne({ where: { email: req.body.email } });

        const GENERIC_ERROR = 'Incorrect email or password. Please try again.'

        if (!userToLogin)
        {
            res.status(400).json({ message: GENERIC_ERROR });
            return;
        }

        // Verify that the given password matches the password for this user
        const passwordValid = await userToLogin.checkPassword(req.body.password);

        if (!passwordValid)
        {
            res.status(400).json({ message: GENERIC_ERROR });
            return;
        }

        req.session.save( () =>
        {
            req.session.loggedIn = true;
            req.session.user_id = userToLogin.id;

            res.status(200).json({ user: userToLogin, message: 'You have successfully been logged in!' });
        });
    }
    catch (error)
    {
        console.log(error)
        res.status(500).json(error);
    }
});

// POST a user's logout request
router.post('/logout', (req, res) =>
{
    // If the user is logged in, then the session will be destroyed, otherwise end the response process
    if (req.session.loggedIn)
    {
        req.session.destroy( () => res.status(204).end() );
    }
    else
    {
        res.status(404).end();
    }
});

module.exports = router;