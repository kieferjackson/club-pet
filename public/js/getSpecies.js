window.addEventListener('DOMContentLoaded', getSpecies());

async function getSpecies()
{

    const response = await fetch('/api/species',
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
    .then( (data) =>
    {
        console.log(data);
    });
}