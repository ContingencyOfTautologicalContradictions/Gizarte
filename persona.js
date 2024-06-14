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
let person = document.getElementById("person");
let person_fields = document.getElementById("person-fields");
let home_and_family = document.getElementById("home-and-family");
let home_and_family_fields = document.getElementById("home-and-family-fields");
let cohabitation_home = document.getElementById("cohabitation-home");
let cohabitation_home_elements = document.getElementById("cohabitation-home-elements");
let registered_address = document.getElementById("registered-address");
let registered_address_elements = document.getElementById("registered-address-elements");
let notification_address = document.getElementById("notification-address");
let notification_address_elements = document.getElementById("notification-address-elements");
let social_record = document.getElementById("social-record");
let social_record_fields = document.getElementById("social-record-fields");
let complementary_personal_data = document.getElementById("complementary-personal-data");
let complementary_personal_data_elements = document.getElementById("complementary-personal-data-elements");
let socio_biographical_data = document.getElementById("socio-biographical-data");
let socio_biographical_data_elements = document.getElementById("socio-biographical-data-elements");
let reason_for_attention_and_evaluation = document.getElementById("reason-for-attention-and-evaluation");
let reason_for_attention_and_evaluation_elements = document.getElementById("reason-for-attention-and-evaluation-elements");
let observations1 = document.getElementById("observations1");
let observations1_elements = document.getElementById("observations1-elements");
let social_history = document.getElementById("social-history");
let social_history_fields = document.getElementById("social-history-fields");
let interventions = document.getElementById("interventions");
let interventions_elements = document.getElementById("interventions-elements");
let aes1 = document.getElementById("aes1");
let aes_elements = document.getElementById("aes-elements");
let documentation = document.getElementById("documentation");
let documentation_fields = document.getElementById("documentation-fields");
let personal_elements = document.getElementById("personal-elements");

function remove_if_exists(element, name)
{
    if(element.classList.contains(name))
        element.classList.remove(name);
}

function add_if_not_exists(element, name)
{
    if(!element.classList.contains(name))
        element.classList.add(name);
}

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
        remove_if_exists(advanced_data, "selected-person-control-option");
        add_if_not_exists(advanced_data, "person-control-option");
        remove_if_exists(observations, "selected-person-control-option");
        add_if_not_exists(observations, "person-control-option");
        remove_if_exists(personal_data, "person-control-option");
        add_if_not_exists(personal_data, "selected-person-control-option");
        advanced_data_elements.style.display = "none";
        observations_elements.style.display = "none";
        personal_data_elements.style.display = "inline";
    });

if(advanced_data)
    advanced_data.addEventListener("click", function(e)
    {
        remove_if_exists(personal_data, "selected-person-control-option");
        add_if_not_exists(personal_data, "person-control-option");
        remove_if_exists(observations, "selected-person-control-option");
        add_if_not_exists(observations, "person-control-option");
        remove_if_exists(advanced_data, "person-control-option");
        add_if_not_exists(advanced_data, "selected-person-control-option");
        personal_data_elements.style.display = "none";
        observations_elements.style.display = "none";
        advanced_data_elements.style.display = "inline";
    });

if(observations)
    observations.addEventListener("click", function(e)
    {
        remove_if_exists(personal_data, "selected-person-control-option");
        add_if_not_exists(personal_data, "person-control-option");
        remove_if_exists(advanced_data, "selected-person-control-option");
        add_if_not_exists(advanced_data, "person-control-option");
        remove_if_exists(observations, "person-control-option");
        add_if_not_exists(observations, "selected-person-control-option");
        personal_data_elements.style.display = "none";
        advanced_data_elements.style.display = "none";
        observations_elements.style.display = "inline";
    });

if(person)
    person.addEventListener("click", function()
    {
        remove_if_exists(home_and_family, "selected-person-control");
        add_if_not_exists(home_and_family, "person-control");
        remove_if_exists(social_record, "selected-person-control");
        add_if_not_exists(social_record, "person-control");
        remove_if_exists(social_history, "selected-person-control");
        add_if_not_exists(social_history, "person-control");
        remove_if_exists(documentation, "selected-person-control");
        add_if_not_exists(documentation, "person-control");
        remove_if_exists(person, "person-control");
        add_if_not_exists(person, "selected-person-control");
        remove_if_exists(advanced_data, "selected-person-control-option");
        add_if_not_exists(advanced_data, "person-control-option");
        remove_if_exists(observations, "selected-person-control-option");
        add_if_not_exists(observations, "person-control-option");
        remove_if_exists(personal_data, "person-control-option");
        add_if_not_exists(personal_data, "selected-person-control-option");
        home_and_family_fields.style.display = "none";
        cohabitation_home_elements.style.display = "none";
        registered_address_elements.style.display = "none";
        notification_address_elements.style.display = "none";
        social_record_fields.style.display = "none";
        complementary_personal_data_elements.style.display = "none";
        socio_biographical_data_elements.style.display = "none";
        reason_for_attention_and_evaluation_elements.style.display = "none";
        observations1_elements.style.display = "none";
        social_history_fields.style.display = "none";
        interventions_elements.style.display = "none";
        aes_elements.style.display = "none";
        documentation_fields.style.display = "none";
        personal_elements.style.display = "none";
        person_fields.style.display = "flex";
        personal_data_elements.style.display = "inline";
    });

if(home_and_family)
    home_and_family.addEventListener("click", function()
    {
        remove_if_exists(person, "selected-person-control");
        add_if_not_exists(person, "person-control");
        remove_if_exists(social_record, "selected-person-control");
        add_if_not_exists(social_record, "person-control");
        remove_if_exists(social_history, "selected-person-control");
        add_if_not_exists(social_history, "person-control");
        remove_if_exists(documentation, "selected-person-control");
        add_if_not_exists(documentation, "person-control");
        remove_if_exists(home_and_family, "person-control");
        add_if_not_exists(home_and_family, "selected-person-control");
        remove_if_exists(registered_address, "selected-person-control-option");
        add_if_not_exists(registered_address, "person-control-option");
        remove_if_exists(notification_address, "selected-person-control-option");
        add_if_not_exists(notification_address, "person-control-option");
        remove_if_exists(cohabitation_home, "person-control-option");
        add_if_not_exists(cohabitation_home, "selected-person-control-option");
        person_fields.style.display = "none";
        personal_data_elements.style.display = "none";
        advanced_data_elements.style.display = "none";
        observations_elements.style.display = "none";
        social_record_fields.style.display = "none";
        complementary_personal_data_elements.style.display = "none";
        socio_biographical_data_elements.style.display = "none";
        reason_for_attention_and_evaluation_elements.style.display = "none";
        observations1_elements.style.display = "none";
        social_history_fields.style.display = "none";
        interventions_elements.style.display = "none";
        aes_elements.style.display = "none";
        documentation_fields.style.display = "none";
        personal_elements.style.display = "none";
        home_and_family_fields.style.display = "flex";
        cohabitation_home_elements.style.display = "inline";
    });

if(cohabitation_home)
    cohabitation_home.addEventListener("click", function()
    {
        remove_if_exists(registered_address, "selected-person-control-option");
        add_if_not_exists(registered_address, "person-control-option");
        remove_if_exists(notification_address, "selected-person-control-option");
        add_if_not_exists(notification_address, "person-control-option");
        remove_if_exists(cohabitation_home, "person-control-option");
        add_if_not_exists(cohabitation_home, "selected-person-control-option");
        registered_address_elements.style.display = "none";
        notification_address_elements.style.display = "none";
        cohabitation_home_elements.style.display = "inline";
    });

if(registered_address)
    registered_address.addEventListener("click", function()
    {
        remove_if_exists(cohabitation_home, "selected-person-control-option");
        add_if_not_exists(cohabitation_home, "person-control-option");
        remove_if_exists(notification_address, "selected-person-control-option");
        add_if_not_exists(notification_address, "person-control-option");
        remove_if_exists(registered_address, "person-control-option");
        add_if_not_exists(registered_address, "selected-person-control-option");
        cohabitation_home_elements.style.display = "none";
        notification_address_elements.style.display = "none";
        registered_address_elements.style.display = "inline";
    });

if(notification_address)
    notification_address.addEventListener("click", function()
    {
        remove_if_exists(cohabitation_home, "selected-person-control-option");
        add_if_not_exists(cohabitation_home, "person-control-option");
        remove_if_exists(registered_address, "selected-person-control-option");
        add_if_not_exists(registered_address, "person-control-option");
        remove_if_exists(notification_address, "person-control-option");
        add_if_not_exists(notification_address, "selected-person-control-option");
        cohabitation_home_elements.style.display = "none";
        registered_address_elements.style.display = "none";
        notification_address_elements.style.display = "inline";
    });

if(social_record)
    social_record.addEventListener("click", function()
    {
        remove_if_exists(person, "selected-person-control");
        add_if_not_exists(person, "person-control");
        remove_if_exists(home_and_family, "selected-person-control");
        add_if_not_exists(home_and_family, "person-control");
        remove_if_exists(social_history, "selected-person-control");
        add_if_not_exists(social_history, "person-control");
        remove_if_exists(documentation, "selected-person-control");
        add_if_not_exists(documentation, "person-control");
        remove_if_exists(social_record, "person-control");
        add_if_not_exists(social_record, "selected-person-control");
        remove_if_exists(socio_biographical_data, "selected-person-control-option");
        add_if_not_exists(socio_biographical_data, "person-control-option");
        remove_if_exists(reason_for_attention_and_evaluation, "selected-person-control-option");
        add_if_not_exists(reason_for_attention_and_evaluation, "person-control-option");
        remove_if_exists(observations1, "selected-person-control-option");
        add_if_not_exists(observations1, "person-control-option");
        remove_if_exists(complementary_personal_data, "person-control-option");
        add_if_not_exists(complementary_personal_data, "selected-person-control-option");
        person_fields.style.display = "none";
        personal_data_elements.style.display = "none";
        advanced_data_elements.style.display = "none";
        observations_elements.style.display = "none";
        home_and_family_fields.style.display = "none";
        cohabitation_home_elements.style.display = "none";
        registered_address_elements.style.display = "none";
        notification_address_elements.style.display = "none";
        observations1_elements.style.display = "none";
        social_history_fields.style.display = "none";
        interventions_elements.style.display = "none";
        aes_elements.style.display = "none";
        documentation_fields.style.display = "none";
        personal_elements.style.display = "none";
        social_record_fields.style.display = "flex";
        complementary_personal_data_elements.style.display = "inline";
    });

if(complementary_personal_data)
    complementary_personal_data.addEventListener("click", function()
    {
        remove_if_exists(socio_biographical_data, "selected-person-control-option");
        add_if_not_exists(socio_biographical_data, "person-control-option");
        remove_if_exists(reason_for_attention_and_evaluation, "selected-person-control-option");
        add_if_not_exists(reason_for_attention_and_evaluation, "person-control-option");
        remove_if_exists(observations1, "selected-person-control-option");
        add_if_not_exists(observations1, "person-control-option");
        remove_if_exists(complementary_personal_data, "person-control-option");
        add_if_not_exists(complementary_personal_data, "selected-person-control-option");
        socio_biographical_data_elements.style.display = "none";
        reason_for_attention_and_evaluation_elements.style.display = "none";
        observations1_elements.style.display = "none";
        complementary_personal_data_elements.style.display = "inline";
    });

if(socio_biographical_data)
    socio_biographical_data.addEventListener("click", function()
    {
        remove_if_exists(complementary_personal_data, "selected-person-control-option");
        add_if_not_exists(complementary_personal_data, "person-control-option");
        remove_if_exists(reason_for_attention_and_evaluation, "selected-person-control-option");
        add_if_not_exists(reason_for_attention_and_evaluation, "person-control-option");
        remove_if_exists(observations1, "selected-person-control-option");
        add_if_not_exists(observations1, "person-control-option");
        remove_if_exists(socio_biographical_data, "person-control-option");
        add_if_not_exists(socio_biographical_data, "selected-person-control-option");
        complementary_personal_data_elements.style.display = "none";
        reason_for_attention_and_evaluation_elements.style.display = "none";
        observations1_elements.style.display = "none";
        socio_biographical_data_elements.style.display = "inline";
    });

if(reason_for_attention_and_evaluation)
    reason_for_attention_and_evaluation.addEventListener("click", function()
    {
        remove_if_exists(complementary_personal_data, "selected-person-control-option");
        add_if_not_exists(complementary_personal_data, "person-control-option");
        remove_if_exists(socio_biographical_data, "selected-person-control-option");
        add_if_not_exists(socio_biographical_data, "person-control-option");
        remove_if_exists(observations1, "selected-person-control-option");
        add_if_not_exists(observations1, "person-control-option");
        remove_if_exists(reason_for_attention_and_evaluation, "person-control-option");
        add_if_not_exists(reason_for_attention_and_evaluation, "selected-person-control-option");
        complementary_personal_data_elements.style.display = "none";
        socio_biographical_data_elements.style.display = "none";
        observations1_elements.style.display = "none";
        reason_for_attention_and_evaluation_elements.style.display = "inline";
    });

if(observations1)
    observations1.addEventListener("click", function()
    {
        remove_if_exists(complementary_personal_data, "selected-person-control-option");
        add_if_not_exists(complementary_personal_data, "person-control-option");
        remove_if_exists(socio_biographical_data, "selected-person-control-option");
        add_if_not_exists(socio_biographical_data, "person-control-option");
        remove_if_exists(reason_for_attention_and_evaluation, "selected-person-control-option");
        add_if_not_exists(reason_for_attention_and_evaluation, "person-control-option");
        remove_if_exists(observations1, "person-control-option");
        add_if_not_exists(observations1, "selected-person-control-option");
        complementary_personal_data_elements.style.display = "none";
        socio_biographical_data_elements.style.display = "none";
        reason_for_attention_and_evaluation_elements.style.display = "none";
        observations1_elements.style.display = "inline";
    });

if(social_history)
    social_history.addEventListener("click", function()
    {
        remove_if_exists(person, "selected-person-control");
        add_if_not_exists(person, "person-control");
        remove_if_exists(home_and_family, "selected-person-control");
        add_if_not_exists(home_and_family, "person-control");
        remove_if_exists(social_record, "selected-person-control");
        add_if_not_exists(social_record, "person-control");
        remove_if_exists(documentation, "selected-person-control");
        add_if_not_exists(documentation, "person-control");
        remove_if_exists(social_history, "person-control");
        add_if_not_exists(social_history, "selected-person-control");
        remove_if_exists(aes1, "selected-person-control-option");
        add_if_not_exists(aes1, "person-control-option");
        remove_if_exists(interventions, "person-control-option");
        add_if_not_exists(interventions, "selected-person-control-option");
        person_fields.style.display = "none";
        personal_data_elements.style.display = "none";
        advanced_data_elements.style.display = "none";
        observations_elements.style.display = "none";
        home_and_family_fields.style.display = "none";
        cohabitation_home_elements.style.display = "none";
        registered_address_elements.style.display = "none";
        notification_address_elements.style.display = "none";
        social_record_fields.style.display = "none";
        complementary_personal_data_elements.style.display = "none";
        socio_biographical_data_elements.style.display = "none";
        reason_for_attention_and_evaluation_elements.style.display = "none";
        observations1_elements.style.display = "none";
        documentation_fields.style.display = "none";
        personal_elements.style.display = "none";
        social_history_fields.style.display = "flex";
        interventions_elements.style.display = "inline";
    });

if(interventions)
    interventions.addEventListener("click", function()
    {
        remove_if_exists(aes1, "selected-person-control-option");
        add_if_not_exists(aes1, "person-control-option");
        remove_if_exists(interventions, "person-control-option");
        add_if_not_exists(interventions, "selected-person-control-option");
        aes_elements.style.display = "none";
        interventions_elements.style.display = "inline";
    });

if(aes1)
    aes1.addEventListener("click", function()
    {
        remove_if_exists(interventions, "selected-person-control-option");
        add_if_not_exists(interventions, "person-control-option");
        remove_if_exists(aes1, "person-control-option");
        add_if_not_exists(aes1, "selected-person-control-option");
        interventions_elements.style.display = "none";
        aes_elements.style.display = "inline";
    });

if(documentation)
    documentation.addEventListener("click", function()
    {
        remove_if_exists(person, "selected-person-control");
        add_if_not_exists(person, "person-control");
        remove_if_exists(home_and_family, "selected-person-control");
        add_if_not_exists(home_and_family, "person-control");
        remove_if_exists(social_record, "selected-person-control");
        add_if_not_exists(social_record, "person-control");
        remove_if_exists(social_history, "person-control");
        add_if_not_exists(social_history, "selected-person-control");
        //remove_if_exists(in);
        remove_if_exists(documentation, "person-control-option");
        add_if_not_exists(documentation, "selected-person-control-option");
        person_fields.style.display = "none";
        personal_data_elements.style.display = "none";
        advanced_data_elements.style.display = "none";
        observations_elements.style.display = "none";
        home_and_family_fields.style.display = "none";
        cohabitation_home_elements.style.display = "none";
        registered_address_elements.style.display = "none";
        notification_address_elements.style.display = "none";
        social_record_fields.style.display = "none";
        complementary_personal_data_elements.style.display = "none";
        socio_biographical_data_elements.style.display = "none";
        reason_for_attention_and_evaluation_elements.style.display = "none";
        observations1_elements.style.display = "none";
        social_history_fields.style.display = "none";
        interventions_elements.style.display = "none";
        aes_elements.style.display = "none";
        documentation_fields.style.display = "flex";
        personal_elements.style.display = "inline";
    });