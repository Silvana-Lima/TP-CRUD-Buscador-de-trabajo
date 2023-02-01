// ****--->>> Utilities <<<---****

const $$ = (selector)=> document.querySelectorAll(selector);
const $ = (selector)=> document.querySelector(selector);

// ****--->>> Variables <<<---****

const BASE_URL = "https://63d98d7019fffcd620b78641.mockapi.io/api";

// Sections
const $$sections = $$(".section");
const $sectionHome = $(".section-home");
const $sectionCreateJob = $(".section-create-job");
const $sectionSeeDetails = $(".section-see-details");
const $btnCreateJob = $(".btn-create-job");
const $btnHome = $(".btn-home");
const $contCards = $(".cont-cards-jobs");

// Formulary Create Job
const $formCreateJob = $(".form-create-job")
const $inputTitleCreateJob = $("#input-title-create-job");
const $inputDescriptionCreateJob = $("#input-description-create-job");
const $inputLocationCreateJob = $("#input-location-create-job");
const $inputSeniorityCreateJob = $("#input-seniority-create-job");
const $inputCategoryCreateJob = $("#input-category-create-job");


// ****--->>> Functions to change the screens<<<---****

const changeScreen = (hideSections, showSection) => {
    for (const section of hideSections) {
      section.classList.add("is-hidden");
    }
    showSection.classList.remove("is-hidden");
  };


// ****--->>> Events to change the screens <<<---****

$btnCreateJob.addEventListener("click", ()=> changeScreen($$sections, $sectionCreateJob));

$btnHome.addEventListener("click", ()=> changeScreen($$sections, $sectionHome));

