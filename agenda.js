let diary_panel = document.getElementById("diary-panel");
let diary_professional_text = document.getElementById("diary-professional-text");
let diary_visible = document.getElementById("diary-grid");
let diary_hidden = document.getElementById("diary-grid-hidden");
let show_hidden_diary = false;

Array.from(document.getElementsByClassName("diary-panel-manager")).forEach((element) =>
{
    element.addEventListener("click", () =>
    {
        diary_panel.style.display = "flex";
    });
});

document.getElementById("agenda-background-close").addEventListener("click", () =>
{
    diary_panel.style.display = "none";
});

document.getElementById("diary-professional").addEventListener("click", () =>
{
    if(!show_hidden_diary)
    {
        show_hidden_diary = true;
        diary_professional_text.innerHTML = "Todos";
        diary_visible.style.display = "none";
        diary_hidden.style.display = "flex";
    }
    else
    {
        show_hidden_diary = false;
        diary_professional_text.innerHTML = "Julia Pardo Iriondo";
        diary_visible.style.display = "flex";
        diary_hidden.style.display = "none";
    }
});