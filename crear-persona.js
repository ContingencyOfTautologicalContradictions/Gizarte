let inicio_link = document.getElementById("inicio-link");
let personal_data_arrow = document.getElementById("personal-data-arrow");
let personal_data_elements = document.getElementsByClassName("personal-data");
let registration_data_arrow = document.getElementById("registration-data-arrow");
let registration_data_elements = document.getElementsByClassName("registration-data");
let cohabitation_home_arrow = document.getElementById("cohabitation-home-arrow");
let cohabitation_home_elements = document.getElementsByClassName("cohabitation-home");
let other_information_arrow = document.getElementById("other-information-arrow");
let other_information_elements = document.getElementsByClassName("other-information");
let display_personal_data = true;
let display_registration_data = true;
let display_cohabitation_home = true;
let display_other_information = true;
let create_person = document.getElementById("create-person");
let cancel_creation = document.getElementById("cancel-creation");

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
            for(let personal_data of personal_data_elements)
                personal_data.style.display = "none";
        }
        else
        {
            display_personal_data = true;
            personal_data_arrow.style.transform = "rotate(0deg)";
            for(let personal_data of personal_data_elements)
                personal_data.style.display = "flex";
        }
    });

if(registration_data_arrow)
    registration_data_arrow.addEventListener("click", function(e)
    {
        if(display_registration_data)
        {
            display_registration_data = false;
            registration_data_arrow.style.transform = "rotate(180deg)";
            for(let registration_data of registration_data_elements)
                registration_data.style.display = "none";
        }
        else
        {
            display_registration_data = true;
            registration_data_arrow.style.transform = "rotate(0deg)";
            for(let registration_data of registration_data_elements)
                registration_data.style.display = "flex";
        }
    });

if(cohabitation_home_arrow)
    cohabitation_home_arrow.addEventListener("click", function(e)
    {
        if(display_cohabitation_home)
        {
            display_cohabitation_home = false;
            cohabitation_home_arrow.style.transform = "rotate(180deg)";
            for(let cohabitation_home of cohabitation_home_elements)
                cohabitation_home.style.display = "none";
        }
        else
        {
            display_cohabitation_home = true;
            cohabitation_home_arrow.style.transform = "rotate(0deg)";
            for(let cohabitation_home of cohabitation_home_elements)
                cohabitation_home.style.display = "flex";
        }
    });

if(other_information_arrow)
    other_information_arrow.addEventListener("click", function(e)
    {
        if(display_other_information)
        {
            display_other_information = false;
            other_information_arrow.style.transform = "rotate(180deg)";
            for(let other_information of other_information_elements)
                other_information.style.display = "none";
        }
        else
        {
            display_other_information = true;
            other_information_arrow.style.transform = "rotate(0deg)";
            for(let other_information of other_information_elements)
                other_information.style.display = "flex";
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