let agenda_profesional = document.getElementById("agenda-profesional");
let agenda_profesional_text = document.getElementById("agenda-profesional-text");
let agenda_grid = document.getElementById("agenda-grid");
let agenda_hidden = document.getElementById("agenda-hidden");
let agenda_background = document.getElementById("agenda-background");
let agenda_background_close = document.getElementById("agenda-background-close");
let agenda_background_printer = document.getElementsByClassName("agenda-background-printer");
let all = false;

if(agenda_profesional)
    agenda_profesional.addEventListener("click", () =>
    {
        if(all)
        {
            all = false;
            agenda_profesional_text.innerHTML = "Julia Pardo Iriondo";
            agenda_grid.style.display = "grid";
            agenda_hidden.style.display = "none";
        }
        else
        {
            all = true;
            agenda_profesional_text.innerHTML = "Todos";
            agenda_grid.style.display = "none";
            agenda_hidden.style.display = "grid";
        }
    });

if(agenda_background_close)
    agenda_background_close.addEventListener("click", () =>
    {
        agenda_background.style.display = "none";
    });

Array.from(agenda_background_printer).forEach(element =>
{
    element.addEventListener("click", () =>
    {
        agenda_background.style.display = "flex";
    });
});