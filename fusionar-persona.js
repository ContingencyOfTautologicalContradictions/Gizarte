let fusion_hidden = document.getElementById("fusion-hidden");
let fusion_action = document.getElementById("selected-fusion-action");
let fusion_close = document.getElementsByClassName("fusion-close");

if(fusion_action)
    fusion_action.addEventListener("click", () =>
    {
        fusion_hidden.style.display = "flex";
    });

Array.from(fusion_close).forEach(element =>
{
    element.addEventListener("click", () =>
    {
        fusion_hidden.style.display = "none";
    });
});