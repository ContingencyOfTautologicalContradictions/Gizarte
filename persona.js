let censo_personas_link = document.getElementById("censo-personas-link");
let change_history_panel = document.getElementById("change-history-background");
let change_history = document.getElementById("change-history");
let change_history_close = document.getElementById("change-history-close");
let personal_data = document.getElementById("personal-data");
let personal_data_elements = document.getElementById("personal-data-elements");
let advanced_data = document.getElementById("advanced-data");
let advanced_data_elements = document.getElementById("advanced-data-elements");
let observations = document.getElementById("observations");
let observations_elements = document.getElementById("observations-elements");

if(censo_personas_link)
    censo_personas_link.addEventListener("click", function(e)
    {
        window.location.href = "./censo-personas.html";
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

if(personal_data)
    personal_data.addEventListener("click", function(e)
    {
        advanced_data_elements.style.display = "none";
        observations_elements.style.display = "none";
        personal_data_elements.style.display = "inline";
    });

if(advanced_data)
    advanced_data.addEventListener("click", function(e)
    {
        personal_data_elements.style.display = "none";
        observations_elements.style.display = "none";
        advanced_data_elements.style.display = "inline";
    });

if(observations)
    observations.addEventListener("click", function(e)
    {
        personal_data_elements.style.display = "none";
        advanced_data_elements.style.display = "none";
        observations_elements.style.display = "inline";
    });