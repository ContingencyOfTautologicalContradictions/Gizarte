let document_number_correct = document.getElementById("correct-display");
let correct_panel = document.getElementById("correct-panel");
let censo_personas_link = document.getElementById("censo-personas-link");
let change_history_panel = document.getElementById("change-history-background");
let change_history = document.getElementById("change-history");
let change_history_close = document.getElementById("change-history-close");
let person = document.getElementById("person");
let personal_data = document.getElementById("personal-data");
let advanced_data = document.getElementById("advanced-data");
let observations = document.getElementById("observations");
let home_and_family = document.getElementById("home-and-family");
let social_record = document.getElementById("social-record");
let complementary_personal_data = document.getElementById("complementary-personal-data");

let last_section = "person";
let last_field = "person-fields";
let last_option = "personal-data";
let last_elements = "personal-data-elements";
let mono_section = false;

function update_section(new_section, new_field, new_option, new_elements)
{
    document.getElementById(last_section).className = "person-control";
    last_section = new_section;
    document.getElementById(new_section).className = "selected-person-control";
    //if(!mono_section)
    {
        document.getElementById(last_field).style.display = "none";
        last_field = new_field;
        document.getElementById(new_field).style.display = "flex";
        document.getElementById(last_option).className = "person-control-option";
        last_option = new_option;
        document.getElementById(new_option).className = "selected-person-control-option";
    }
    //else
      //  mono_section = false;
    document.getElementById(last_elements).style.display = "none";
    last_elements = new_elements;
    document.getElementById(new_elements).style.display = "inline";
}

/*function update_mono_section(new_section, new_elements)
{
    document.getElementById(last_section).className = "person-control";
    last_section = new_section;
    document.getElementById(new_section).className = "selected-person-control";
    document.getElementById(last_elements).style.display = "none";
    last_elements = new_elements;
    document.getElementById(new_elements).style.display = "inline";
    if(!mono_section)
    {
        document.getElementById(last_field).style.display = "none";
        document.getElementById(last_option).className = "person-control-option";
    }
    mono_section = true;
}*/

function update_option(new_option, new_elements)
{
    document.getElementById(last_option).className = "person-control-option";
    last_option = new_option;
    document.getElementById(new_option).className = "selected-person-control-option";
    document.getElementById(last_elements).style.display = "none";
    last_elements = new_elements;
    document.getElementById(new_elements).style.display = "inline";
}

if(person)
    person.addEventListener("click", () =>
    {
        update_section("person", "person-fields", "personal-data", "personal-data-elements");
    });

if(personal_data)
    personal_data.addEventListener("click", () =>
    {
        update_option("personal-data", "personal-data-elements");
    });

if(advanced_data)
    advanced_data.addEventListener("click", () =>
    {
        update_option("advanced-data", "advanced-data-elements");
    });

if(observations)
    observations.addEventListener("click", () =>
    {
        update_option("observations", "observations-elements");
    });

if(home_and_family)
    home_and_family.addEventListener("click", () =>
    {
        update_section("home-and-family", "", "", "cohabitation-home-elements");
    });

if(social_record)
    social_record.addEventListener("click", () =>
    {
        update_section("social-record", "social-record-fields", "complementary-personal-data", "complementary-personal-data-elements");
    });

if(complementary_personal_data)
    complementary_personal_data.addEventListener("click", () =>
    {
        update_option("complementary-personal-data", "complementary-personal-data-elements");
    });

if(document_number_correct)
    document_number_correct.addEventListener("click", () =>
    {
        document_number_correct.style.display = "none";
        correct_panel.style.display = "flex";
    });

if(correct_panel)
    correct_panel.addEventListener("click", () =>
    {
        correct_panel.style.display = "none";
        document_number_correct.style.display = "inline";
    });

if(censo_personas_link)
    censo_personas_link.addEventListener("click", function(e)
    {
        window.location.href = "./fusionar-persona.html";
    });

if(change_history)
    change_history.addEventListener("click", function(e)
    {
        change_history_panel.style.display = "flex";
    });

if(change_history_close)
    change_history_close.addEventListener("click", function(e)
    {
        change_history_panel.style.display = "none";
    });

