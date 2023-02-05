const validateForm = ()=>{
    validTitle = $inputTitleCreateJob.value.length > 3;
    validDescription = $inputDescriptionCreateJob.value.length > 3;
    validLocation = $inputLocationCreateJob.value.length > 3;
    validSeniority = $inputSeniorityCreateJob.value.length > 3;
    validCategory = $inputCategoryCreateJob.value.length > 3;
}

const inputError = (inputValid, inputDom)=>{
    if (!inputValid) {
        $errorNotification.classList.remove("is-hidden");
        inputDom.classList.remove("is-link");
        inputDom.classList.add("is-danger");
    } else {
        $errorNotification.classList.add("is-hidden");
        inputDom.classList.remove("is-danger");
        inputDom.classList.add("is-link");
    }
}

const showErrors = ()=>{

    inputError(validTitle, $inputTitleCreateJob);
    inputError(validDescription, $inputDescriptionCreateJob);
    inputError(validLocation, $inputLocationCreateJob);
    inputError(validSeniority, $inputSeniorityCreateJob);
    inputError(validCategory, $inputCategoryCreateJob);

    if (validTitle && validDescription && validLocation && validSeniority && validCategory){
        createJob();
    }

}