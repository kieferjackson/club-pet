
function checkFormSubmission()
{
    // Select form values
    const pet_name = document.querySelector('#pet_name').value;
    const about_pet = document.querySelector('#about_pet').value;
    const pet_is_male = document.querySelector('#male_option').checked;
    const pet_is_female = document.querySelector('#female_option').checked;
    // An index of 0 indicates that no species has been chosen (left on default selection)
    const species = document.querySelector('#species_list').selectedIndex;

    // Check the input fields
    const validName = /^[a-zA-Z]+$/.test(pet_name);
    const sexSelected = pet_is_male || pet_is_female;
    const aboutGiven = about_pet !== "";
    const speciesGiven = species > 0;

    const all_info_given = validName && sexSelected && aboutGiven && speciesGiven;

    if (all_info_given)
    {
        return true;
    }
    else
    {
        let error_message = '';

        if (!validName)
            error_message += 'Invalid pet name.\n';
        
        if (!sexSelected)
            error_message += 'Please select male or female.\n';

        if (!aboutGiven)
            error_message += 'Insufficient information for about section.\n';
        
        if (!speciesGiven)
            error_message += 'Please select a species.\n';

        alert(error_message);
        return false;
    }
}