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

// POST a new species
router.post('/', async (req, res) =>
{
    try
    {
        const { name } = req.body;
        
        // Check that request body contains species name
        if (name)
        {
            const newSpecies = await Species.create({ name });

            res.redirect('/');
            return;
        }
        else
        {
            res.status(400).json({ message: `Insufficient information to add species` });
        }
    }
    catch (error)
    {
        console.log(error)
        res.status(500).json(error);
    }
});

router.delete('/:id', async (req, res) =>
{
    const given_species_id = req.params.id;

    try
    {
        const speciesToDelete = await Species.findByPk(given_species_id);

        if (!speciesToDelete)
        {
            res.status(400).json({ message: `No species with ID: ${given_species_id}` });
            return;
        }

        await speciesToDelete.destroy();

        res.status(200).json({ message: `The species with ID ${given_species_id} was successfully removed from the database` });
    }
    catch (error)
    {
        res.status(500).json(error);
    }
});

module.exports = router;