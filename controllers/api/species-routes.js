const router = require('express').Router();
const { Species } = require('../../models');

router.get('/', async (req, res) =>
{
    try
    {
        const speciesData = await Species.findAll({ attributes: ['name'] });

        const species = speciesData.map( (species) => species.get({ plain: true }));

        // Send back all species in the database
        res.status(200).json(species);
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;