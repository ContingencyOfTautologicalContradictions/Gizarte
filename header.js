let inicio = document.getElementById("inicio");
let aes = document.getElementById("aes");
let censo_personas = document.getElementById("censo-personas");
let agenda = document.getElementById("agenda");

if(inicio)
    inicio.addEventListener("click", function(e)
    {
        window.location.href = "./index.html";
    });

if(aes)
    aes.addEventListener("click", function(e)
    {
        window.location.href = "./aes.html";
    });

if(censo_personas)
    censo_personas.addEventListener("click", function(e)
    {
        window.location.href = "./fusionar-persona.html";
    });

if(agenda)
    agenda.addEventListener("click", function(e)
    {
        window.location.href = "./agenda.html";
    });