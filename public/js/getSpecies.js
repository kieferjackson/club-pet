window.addEventListener('DOMContentLoaded', getSpecies());

async function getSpecies()
{

    await fetch('/api/species',
    {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then( (response) =>
    {
        if (response.ok)
        {
            return response.json();
        }
        else 
        {
            alert('Failed to retrieve species data. Please reload the page and try again.');
            throw Error(response.statusText);
        }
    })
    .then( (species_data) =>
    {
        const SPECIES_MENU = document.querySelector('#species_list');
        let initial_option = document.createElement('option');
        initial_option.innerText = '- Select Species -';

        SPECIES_MENU.appendChild(initial_option);

        // Add Species options to dropdown menu
        for (let species of species_data)
        {
            let species_option = document.createElement('option');

            // Set both the option text and value to the species name
            species_option.innerText = species_option.value = species.name;
            
            SPECIES_MENU.appendChild(species_option);
        }
        console.log(species_data);
    });
}