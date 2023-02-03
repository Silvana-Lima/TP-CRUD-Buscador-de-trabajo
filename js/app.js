// ****--->>> Utilities <<<---****

const $$ = (selector)=> document.querySelectorAll(selector);
const $ = (selector)=> document.querySelector(selector);

// ****--->>> Variables <<<---****

const BASE_URL = "https://63d98d7019fffcd620b78641.mockapi.io/api";

// Sections
const $$sections = $$(".section");

// Section home
const $sectionHome = $(".section-home");
const $btnCreateJob = $(".btn-create-job");
const $btnHome = $(".btn-home");
const $contCardsJobs = $(".cont-cards-jobs")

// Section Create Job
const $sectionCreateJob = $(".section-create-job");
const $formCreateJob = $(".form-create-job")
const $inputTitleCreateJob = $("#input-title-create-job");
const $inputDescriptionCreateJob = $("#input-description-create-job");
const $inputLocationCreateJob = $("#input-location-create-job");
const $inputSeniorityCreateJob = $("#input-seniority-create-job");
const $inputCategoryCreateJob = $("#input-category-create-job");

// Section See Details
const $sectionSeeDetails = $(".section-see-details");
const $btnDeleteJob = $(".btn-delete-job");
const $btnEditJob = $(".btn-edit-job");
const $cardDetailTitle = $(".card-detail-title");
const $cardDetailDescription = $(".card-detail-description");
const $cardDetailLocation = $(".card-detail-location");
const $cardDetailSeniority = $(".card-detail-seniority");
const $cardDetailCategory = $(".card-detail-category");
const $modalDeleteJob = $(".modal-delete-job");
const $btnModalDeleteJob = $(".btn-modal-delete-job");
const $btnModalCancelDelete = $(".btn-modal-cancel-delete-job");
const $contEditJob = $(".cont-edit-job");
const $formEditJob = $(".form-edit-job");
const $inputTitleEditJob = $(".input-title-edit-job");
const $textAreaDescriptionEditJob = $(".textarea-description-edit-job");
const $inputLocationEditJob = $(".input-location-edit-job");
const $inputSeniorityEditJob = $(".input-seniority-edit-job");
const $inputCategoryEditJob = $(".input-category-edit-job");
const $btnSubmitEditForm = $(".btn-submit-form-edit");


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

