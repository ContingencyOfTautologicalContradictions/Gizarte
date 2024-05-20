let search_text = document.getElementById("search-text");
let search_cancel = document.getElementById("search-cancel");
let search_action = document.getElementById("search-action");
let search_not_found = document.getElementById("search-not-found");
let search_not_found_close = document.getElementById("search-not-found-close");
let search_not_found_cancel = document.getElementById("search-not-found-cancel");
let create_person = document.getElementById("create-person");

if(search_text)
    search_text.addEventListener("input", function(e)
    {
        if(search_text.value.length > 0)
            search_cancel.style.display = "inline";
        else
            search_cancel.style.display = "none";
    });

if(search_cancel)
    search_cancel.addEventListener("click", function(e)
    {
        search_text.value = "";
        search_cancel.style.display = "none";
    });

if(search_action)
    search_action.addEventListener("click", function(e)
    {
        search_not_found.style.display = "flex";
    });

if(search_not_found_close)
    search_not_found_close.addEventListener("click", function(e)
    {
        search_not_found.style.display = "none";
    });

if(search_not_found_cancel)
    search_not_found_cancel.addEventListener("click", function(e)
    {
        search_not_found.style.display = "none";
    });

if(create_person)
    create_person.addEventListener("click", function(e)
    {
        window.location.href = "./crear-persona.html";
    });