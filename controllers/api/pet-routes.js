const router = require('express').Router();
const { Pet } = require('../models');

// TODO: POST a new pet
router.post('/', async (req, res) =>
{
    try
    {
        const newPet = await Pet.create
        (
            {
                pet_name: req.body.pet_name,
                about_pet: req.body.about_pet,
                owner_id: req.body.owner_id
            }
        );

        req.status(200).json(newPet);
    }
    catch (error)
    {
        console.log(error)
        res.status(500).json(error);
    }
});

module.exports = router;