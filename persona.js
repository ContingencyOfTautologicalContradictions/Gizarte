let document_number_correct = document.getElementById("correct-display");
let correct_panel = document.getElementById("correct-panel");
let censo_personas_link = document.getElementById("censo-personas-link");
let change_history_panel = document.getElementById("change-history-background");
let change_history = document.getElementById("change-history");
let change_history_close = document.getElementById("change-history-close");
let information = document.getElementById("information");
let information_displayer = document.getElementById("information-displayer");
let information1 = document.getElementById("information1");
let information_displayer1 = document.getElementById("information-displayer1");
let home_uf_displayer = document.getElementById("home-and-uf-history");
let home_uf = document.getElementById("home-uf-background");
let home_uf_close = document.getElementById("home-uf-close");
let person = document.getElementById("person");
let personal_data = document.getElementById("personal-data");
let advanced_data = document.getElementById("advanced-data");
let observations = document.getElementById("observations");
let home_and_family = document.getElementById("home-and-family");
let social_record = document.getElementById("social-record");
let complementary_personal_data = document.getElementById("complementary-personal-data");
let socio_biographical_data = document.getElementById("socio-biographical-data");
let reason_for_attention_and_evaluation = document.getElementById("reason-for-attention-and-evaluation");
let observations1 = document.getElementById("observations1");
let social_history = document.getElementById("social-history");
let interventions = document.getElementById("interventions");
let aes1 = document.getElementById("aes1");
let documentation = document.getElementById("documentation");
let last_section = "person";
let last_field = "person-fields";
let last_option = "personal-data";
let last_elements = "personal-data-elements";

function update_section(mono_section, new_section, new_field, new_option, new_elements)
{
    document.getElementById(last_section).className = "person-control";
    last_section = new_section;
    document.getElementById(new_section).className = "selected-person-control";
    if(mono_section)
    {
        document.getElementById(last_field).style.display = "none";
        document.getElementById(last_option).className = "person-control-option";
    }
    else
    {
        document.getElementById(last_field).style.display = "none";
        document.getElementById(last_option).className = "person-control-option";
        last_field = new_field;
        document.getElementById(new_field).style.display = "flex";
        last_option = new_option;
        document.getElementById(new_option).className = "selected-person-control-option";
    }
    document.getElementById(last_elements).style.display = "none";
    last_elements = new_elements;
    document.getElementById(new_elements).style.display = "inline";
}

function update_option(new_option, new_elements)
{
    document.getElementById(last_option).className = "person-control-option";
    last_option = new_option;
    document.getElementById(new_option).className = "selected-person-control-option";
    document.getElementById(last_elements).style.display = "none";
    last_elements = new_elements;
    document.getElementById(new_elements).style.display = "inline";
}

if(person)
    person.addEventListener("click", () =>
    {
        update_section(false, "person", "person-fields", "personal-data", "personal-data-elements")
    });

if(personal_data)
    personal_data.addEventListener("click", () =>
    {
        update_option("personal-data", "personal-data-elements");
    });

if(advanced_data)
    advanced_data.addEventListener("click", () =>
    {
        update_option("advanced-data", "advanced-data-elements");
    });

if(observations)
    observations.addEventListener("click", () =>
    {
        update_option("observations", "observations-elements");
    });

if(home_and_family)
    home_and_family.addEventListener("click", () =>
    {
        update_section(true, "home-and-family", "", "", "cohabitation-home-elements");
    });

if(social_record)
    social_record.addEventListener("click", () =>
    {
        update_section(false, "social-record", "social-record-fields", "complementary-personal-data", "complementary-personal-data-elements");
    });

if(complementary_personal_data)
    complementary_personal_data.addEventListener("click", () =>
    {
        update_option("complementary-personal-data", "complementary-personal-data-elements");
    });

if(socio_biographical_data)
    socio_biographical_data.addEventListener("click", () =>
    {
        update_option("socio-biographical-data", "socio-biographical-data-elements");
    });

if(reason_for_attention_and_evaluation)
    reason_for_attention_and_evaluation.addEventListener("click", () =>
    {
        update_option("reason-for-attention-and-evaluation", "reason-for-attention-and-evaluation-elements");
    });

if(observations1)
    observations1.addEventListener("click", () =>
    {
        update_option("observations1", "observations1-elements");
    });

if(social_history)
    social_history.addEventListener("click", () =>
    {
        update_section(false, "social-history", "social-history-fields", "interventions", "interventions-elements");
    });

if(interventions)
    interventions.addEventListener("click", () =>
    {
        update_option("interventions", "interventions-elements");
    });

if(aes1)
    aes1.addEventListener("click", () =>
    {
        update_option("aes1", "aes-elements");
    });

if(documentation)
    documentation.addEventListener("click", () =>
    {
        update_section(false, "documentation", "documentation-fields", "personal", "personal-elements");
    });

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

if(censo_personas_link)
    censo_personas_link.addEventListener("click", function(e)
    {
        window.location.href = "./fusionar-persona.html";
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

if(information)
    information.addEventListener("click", () =>
    {
        information.style.display = "none";
        information_displayer.style.display = "flex";
    });

if(information_displayer)
    information_displayer.addEventListener("click", () =>
    {
        information_displayer.style.display = "none";
        information.style.display = "inline";
    });

if(information1)
    information1.addEventListener("click", () =>
    {
        information1.style.display = "none";
        information_displayer1.style.display = "flex";
    });

if(information_displayer1)
    information_displayer1.addEventListener("click", () =>
    {
        information_displayer1.style.display = "none";
        information1.style.display = "inline";
    });

if(home_uf_displayer)
    home_uf_displayer.addEventListener("click", () =>
    {
        home_uf.style.display = "flex";
    });

if(home_uf_close)
    home_uf_close.addEventListener("click", () =>
    {
        home_uf.style.display = "none";
    });