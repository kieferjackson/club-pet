const router = require('express').Router();
const { Pet } = require('../../models');

// GET Pet by id
router.get('/:id', async (req, res) =>
{
    const given_pet_id = req.params.id;

    try
    {
        const petData = await Pet.findByPk(given_pet_id);

        if (!petData)
        {
            res.status(404).json({ message: `No pet with ID: ${given_pet_id}` });
            return;
        }

        res.status(200).json(petData);
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json(error);
    }
});

// Get all pets for an individual user
router.get('/owned_by/:owner_id', async (req, res) =>
{
    const given_owner_id = req.params.owner_id;

    try
    {
        const petsOfOwner = await Pet.findAll({ where: { owner_id: given_owner_id }});

        if (!petsOfOwner)
        {
            res.status(404).json({ message: `No pets belong to this owner` });
            return;
        }

        res.status(200).json(petsOfOwner);
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json(error);
    }
});

// POST a new pet
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

        res.status(200).json(newPet);
    }
    catch (error)
    {
        console.log(error)
        res.status(500).json(error);
    }
});

// Update preexisting pet
router.put('/:id', async (req, res) =>
{
    const given_pet_id = req.params.id;

    try
    {
        const petToUpdate = await Pet.findByPk(given_pet_id);

        if (!petToUpdate)
        {
            res.status(404).json({ message: `No pet with ID: ${given_pet_id}` });
            return;
        }

        // TODO: Check that the user has authentication to change this pet (they own this pet)

        // Updated selected pet with the request body
        petToUpdate.set(req.body);
        await petToUpdate.save();

        res.status(200).json(petToUpdate);
    }
    catch (error)
    {
        res.status(500).json(error);
    }
});

router.delete('/:id', async (req, res) =>
{
    const given_pet_id = req.params.id;

    try
    {
        const petToDelete = await Pet.findByPk(given_pet_id);

        if (!petToDelete)
        {
            res.status(400).json({ message: `No pet with ID: ${given_pet_id}` });
            return;
        }

        // TODO: Check that the user has authentication to delete this pet (they own this pet)

        await petToDelete.destroy();

        res.status(200).json({ message: `The pet with ID ${given_pet_id} was successfully removed from the database` });
    }
    catch (error)
    {
        res.status(500).json(error);
    }
});

module.exports = router;