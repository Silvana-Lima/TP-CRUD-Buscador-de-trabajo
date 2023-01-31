// ****--->>> Utilities <<<---****

const $$ = (selector)=> document.querySelectorAll(selector);
const $ = (selector)=> document.querySelector(selector);

// ****--->>> Variables <<<---****

const $$sections = $$(".section");
const $sectionHome = $(".section-home");
const $sectionCreateJob = $(".section-create-job");
const $sectionSeeDetails = $(".section-see-details");
const $btnCreateJob = $(".btn-create-job");
const $btnHome = $(".btn-home");

// ****--->>> Functions <<<---****

const changeScreen = (hideSections, showSection) => {
    for (const section of hideSections) {
      section.classList.add("is-hidden");
    }
    showSection.classList.remove("is-hidden");
  };


// ****--->>> Events <<<---****

$btnCreateJob.addEventListener("click", ()=> changeScreen($$sections, $sectionCreateJob));

$btnHome.addEventListener("click", ()=> changeScreen($$sections, $sectionHome));

