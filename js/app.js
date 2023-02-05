// ****--->>> Utilities <<<---****

const $$ = (selector)=> document.querySelectorAll(selector);
const $ = (selector)=> document.querySelector(selector);

// ****--->>> Variables <<<---****

const BASE_URL = "https://63d98d7019fffcd620b78641.mockapi.io/api";

// Nav

const $btnNavBarBurger = $(".navbar-burger");
const $navBarMenu = $(".navbar-menu");

// Sections
const $$sections = $$(".section");

// Section home
const $sectionHome = $(".section-home");
const $itemCreateJob = $(".item-create-job");
const $itemHome = $(".item-home");
const $contCardsJobs = $(".cont-cards-jobs");
const $contNoResults = $(".cont-no-results")
const $selecLocation = $(".select-location");
const $selecSeniority = $(".select-seniority");
const $selecCategory = $(".select-category");
const $formSearchJob = $(".form-search-job");
const $btnClear = $(".btn-clear");

// Section Create Job
const $sectionCreateJob = $(".section-create-job");
const $formCreateJob = $(".form-create-job")
const $inputTitleCreateJob = $("#input-title-create-job");
const $inputDescriptionCreateJob = $("#input-description-create-job");
const $inputLocationCreateJob = $("#input-location-create-job");
const $inputSeniorityCreateJob = $("#input-seniority-create-job");
const $inputCategoryCreateJob = $("#input-category-create-job");
const $errorNotification = $(".error-notification");
let validTitle; 
let validDescription; 
let validLocation; 
let validSeniority; 
let validCategory;

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

$itemCreateJob.addEventListener("click", ()=> changeScreen($$sections, $sectionCreateJob));

$itemHome.addEventListener("click", ()=> {
  changeScreen($$sections, $sectionHome);
  $errorNotification.classList.add("is-hidden");});

// ****---- Event to active NavBurger Bulma ----****

$btnNavBarBurger.addEventListener("click", ()=> {
  $navBarMenu.classList.toggle("is-active");
  $btnNavBarBurger.classList.toggle("is-active");
});

