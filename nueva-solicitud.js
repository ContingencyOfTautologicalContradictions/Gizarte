let aes_link = document.getElementById("aes-link");
let requested_help = document.getElementById("requested-help");
let requested_help_elements = document.getElementById("requested-help-elements");
let requested_help_display = false;
let owner_and_beneficiary_details = document.getElementById("owner-and-beneficiary-details");
let owner_and_beneficiary_details_elements = document.getElementById("owner-and-beneficiary-details-elements");
let owner_and_beneficiary_details_display = false;
let legal_representative = document.getElementById("legal-representative");
let legal_representative_elements = document.getElementById("legal-representative-elements");
let legal_representative_display = false;
let economical_data = document.getElementById("economical-data");
let economical_data_elements = document.getElementById("economical-data-elements");
let economical_data_display = false;
let census = document.getElementById("census");
let census_elements = document.getElementById("census-elements");
let census_display = false;
let edit_person = document.getElementById("edit-person");
let personal_data_panel = document.getElementById("personal-data-panel1");
let personal_data_close = document.getElementById("personal-data-close");
let personal_data_wrapper = document.getElementById("personal-data-wrapper");
let add_uc = document.getElementById("add-to-uc");
let eliminate_uc = document.getElementById("eliminate-uc-rows");
let visible_row = document.getElementsByClassName("visible-row");
let hidden_row = document.getElementsByClassName("hidden-row");

if(add_uc)
    add_uc.addEventListener("click", function()
    {
        Array.from(visible_row).forEach(element =>
        {
            element.style.display = "none";
        });
        Array.from(hidden_row).forEach(element =>
        {
            element.style.display = "flex";
        });
    });

if(eliminate_uc)
    eliminate_uc.addEventListener("click", function()
    {
        Array.from(visible_row).forEach(element =>
        {
            element.style.display = "flex";
        });
        Array.from(hidden_row).forEach(element =>
        {
            element.style.display = "none";
        });
    });

if(edit_person)
    edit_person.addEventListener("click", function()
    {
        personal_data_panel.style.display = "flex";
    });

if(personal_data_close)
    personal_data_close.addEventListener("click", function()
    {
        personal_data_panel.style.display = "none";
    });

if(personal_data_wrapper)
    personal_data_wrapper.addEventListener("click", function()
    {
        
    });

if(aes_link)
    aes_link.addEventListener("click", function()
    {
        window.location.href = "./aes.html";
    });

if(requested_help)
    requested_help.addEventListener("click", function()
    {
        if(requested_help_display)
        {
            requested_help_display = false;
            requested_help.style.rotate = "0deg";
            requested_help_elements.style.display = "none";
        }
        else
        {
            requested_help_display = true;
            requested_help.style.rotate = "180deg";
            requested_help_elements.style.display = "inline";
        }
    });

if(owner_and_beneficiary_details)
    owner_and_beneficiary_details.addEventListener("click", function()
    {
        if(owner_and_beneficiary_details_display)
        {
            owner_and_beneficiary_details_display = false;
            owner_and_beneficiary_details.style.rotate = "0deg";
            owner_and_beneficiary_details_elements.style.display = "none";
        }
        else
        {
            owner_and_beneficiary_details_display = true;
            owner_and_beneficiary_details.style.rotate = "180deg";
            owner_and_beneficiary_details_elements.style.display = "inline";
        }
    });

if(legal_representative)
    legal_representative.addEventListener("click", function()
    {
        if(legal_representative_display)
        {
            legal_representative_display = false;
            legal_representative.style.rotate = "0deg";
            legal_representative_elements.style.display = "none";
        }
        else
        {
            legal_representative_display = true;
            legal_representative.style.rotate = "180deg";
            legal_representative_elements.style.display = "inline";
        }
    });

if(economical_data)
    economical_data.addEventListener("click", function()
    {
        if(economical_data_display)
        {
            economical_data_display = false;
            economical_data.style.rotate = "0deg";
            economical_data_elements.style.display = "none";
        }
        else
        {
            economical_data_display = true;
            economical_data.style.rotate = "180deg";
            economical_data_elements.style.display = "inline";
        }
    });

if(census)
    census.addEventListener("click", function()
    {
        if(census_display)
        {
            census_display = false;
            census.style.rotate = "0deg";
            census_elements.style.display = "none";
        }
        else
        {
            census_display = true;
            census.style.rotate = "180deg";
            census_elements.style.display = "inline";
        }
    });

let cohabitation_home = document.getElementById("cohabitation_home");
let cohabitation_home_elements = document.getElementById("cohabitation_home-elements");
let cohabitation_home_display = false;

cohabitation_home.addEventListener("click", function()
{
    if(cohabitation_home_display)
    {
        cohabitation_home_display = false;
        cohabitation_home.style.rotate = "0deg";
        cohabitation_home_elements.style.display = "none";
    }
    else
    {
        cohabitation_home_display = true;
        cohabitation_home.style.rotate = "180deg";
        cohabitation_home_elements.style.display = "inline";
    }
});

let application_summary = document.getElementById("application-summary");
let application_summary_elements = document.getElementById("application-summary-elements");
let application_summary_display = false;

application_summary.addEventListener("click", function()
{
    if(application_summary_display)
    {
        application_summary_display = false;
        application_summary.style.rotate = "0deg";
        application_summary_elements.style.display = "none";
    }
    else
    {
        application_summary_display = true;
        application_summary.style.rotate = "180deg";
        application_summary_elements.style.display = "inline";
    }
});

let aid_payment = document.getElementById("aid-payment");
let aid_payment_elements = document.getElementById("aid-payment-elements");
let aid_payment_display = false;

aid_payment.addEventListener("click", function()
{
    if(aid_payment_display)
    {
        aid_payment_display = false;
        aid_payment.style.rotate = "0deg";
        aid_payment_elements.style.display = "none";
    }
    else
    {
        aid_payment_display = true;
        aid_payment.style.rotate = "180deg";
        aid_payment_elements.style.display = "inline";
    }
});

let attached_documentation = document.getElementById("attached-documentation");
let attached_documentation_elements = document.getElementById("attached-documentation-elements");
let attached_documentation_display = false;

attached_documentation.addEventListener("click", function()
{
    if(attached_documentation_display)
    {
        attached_documentation_display = false;
        attached_documentation.style.rotate = "0deg";
        attached_documentation_elements.style.display = "none";
    }
    else
    {
        attached_documentation_display = true;
        attached_documentation.style.rotate = "180deg";
        attached_documentation_elements.style.display = "inline";
    }
});

let generate_documentation = document.getElementById("generate-documentation");
let generate_documentation_elements = document.getElementById("generate-documentation-elements");
let generate_documentation_display = false;

generate_documentation.addEventListener("click", function()
{
    if(generate_documentation_display)
    {
        generate_documentation_display = false;
        generate_documentation.style.rotate = "0deg";
        generate_documentation_elements.style.display = "none";
    }
    else
    {
        generate_documentation_display = true;
        generate_documentation.style.rotate = "180deg";
        generate_documentation_elements.style.display = "inline";
    }
});