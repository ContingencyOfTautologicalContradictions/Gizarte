let diary_professional = document.getElementById("diary-professional");
let diary_professional_text = document.getElementById("diary-professional-text");
let diary_visible = document.getElementById("diary-grid");
let diary_hidden = document.getElementById("diary-grid-hidden");
let show_hidden_diary = false;

if(diary_professional)
    diary_professional.addEventListener("click", () =>
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

let height = 70;

function calculate_height(elements, percentage, ignore_pad)
{
    let final_height = height / 100 * percentage;
    Array.from(elements).forEach((element) =>
    {
        let truly_final_height = 0;
        if(!ignore_pad)
            truly_final_height = (final_height - element.style.paddingBottom - element.style.paddingTop).toString() + "px";
        else
            truly_final_height = final_height.toString() + "px";
        element.style.minHeight = truly_final_height;
        element.style.maxHeight = truly_final_height;
    });
}

document.addEventListener("DOMContentLoaded", () =>
{
    calculate_height(document.getElementsByClassName("diary-hour"), 100, true);
    calculate_height(document.getElementsByClassName("single"), 100, false);

});