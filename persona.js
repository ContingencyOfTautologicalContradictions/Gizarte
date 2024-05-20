let censo_personas_link = document.getElementById("censo-personas-link");
let change_history_panel = document.getElementById("change-history-background");
let change_history = document.getElementById("change-history");
let change_history_close = document.getElementById("change-history-close");

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