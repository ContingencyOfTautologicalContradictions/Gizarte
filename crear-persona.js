let inicio_link = document.getElementById("inicio-link");
let personal_data_arrow = document.getElementById("personal-data-arrow");
let personal_data_elements = document.getElementById("personal-data");
let registration_data_arrow = document.getElementById("registration-data-arrow");
let registration_data_elements = document.getElementById("registration-data");
let cohabitation_home_arrow = document.getElementById("cohabitation-home-arrow");
let cohabitation_home_elements = document.getElementById("cohabitation-home");
let other_information_arrow = document.getElementById("other-information-arrow");
let other_information_elements = document.getElementById("other-information");
let display_personal_data = true;
let display_registration_data = true;
let display_cohabitation_home = true;
let display_other_information = true;
let create_person = document.getElementById("create-person");
let cancel_creation = document.getElementById("cancel-creation");
let document_number_correct = document.getElementById("correct-display");
let correct_panel = document.getElementById("correct-panel");

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

if(inicio_link)
    inicio_link.addEventListener("click", function(e)
    {
        window.location.href = "./index.html";
    });

if(personal_data_arrow)
    personal_data_arrow.addEventListener("click", function(e)
    {
        if(display_personal_data)
        {
            display_personal_data = false;
            personal_data_arrow.style.transform = "rotate(180deg)";
            personal_data_elements.style.display = "none";
        }
        else
        {
            display_personal_data = true;
            personal_data_arrow.style.transform = "rotate(0deg)";
            personal_data_elements.style.display = "grid";
        }
    });

if(registration_data_arrow)
    registration_data_arrow.addEventListener("click", function(e)
    {
        if(display_registration_data)
        {
            display_registration_data = false;
            registration_data_arrow.style.transform = "rotate(180deg)";
            registration_data_elements.style.display = "none";
        }
        else
        {
            display_registration_data = true;
            registration_data_arrow.style.transform = "rotate(0deg)";
            registration_data_elements.style.display = "grid";
        }
    });

if(cohabitation_home_arrow)
    cohabitation_home_arrow.addEventListener("click", function(e)
    {
        if(display_cohabitation_home)
        {
            display_cohabitation_home = false;
            cohabitation_home_arrow.style.transform = "rotate(180deg)";
            cohabitation_home_elements.style.display = "none";
        }
        else
        {
            display_cohabitation_home = true;
            cohabitation_home_arrow.style.transform = "rotate(0deg)";
            cohabitation_home_elements.style.display = "grid";
        }
    });

if(other_information_arrow)
    other_information_arrow.addEventListener("click", function(e)
    {
        if(display_other_information)
        {
            display_other_information = false;
            other_information_arrow.style.transform = "rotate(180deg)";
            other_information_elements.style.display = "none";
        }
        else
        {
            display_other_information = true;
            other_information_arrow.style.transform = "rotate(0deg)";
            other_information_elements.style.display = "grid";
        }
    });

if(create_person)
    create_person.addEventListener("click", function(e)
    {
        window.location.href = "./persona.html";
    });

if(cancel_creation)
    cancel_creation.addEventListener("click", function(e)
    {
        window.location.href = "./index.html";
    });