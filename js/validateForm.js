const validateForm = ()=>{
    validTitle = $inputTitleCreateJob.value.length > 2;
    validDescription = $inputDescriptionCreateJob.value.length > 2;
    validLocation = $inputLocationCreateJob.value.length > 2;
    validSeniority = $inputSeniorityCreateJob.value.length > 2;
    validCategory = $inputCategoryCreateJob.value.length > 2;
}

const changeColorInput = (input, removeColor, addColor) =>{
    input.classList.remove(removeColor);
    input.classList.add(addColor);
}

const inputError = (inputValid, inputDom)=>{
    if (!inputValid) {
        $errorNotification.classList.remove("is-hidden");
        changeColorInput(inputDom, "is-link", "is-danger");
    } else {
        $errorNotification.classList.add("is-hidden");
        changeColorInput(inputDom, "is-danger", "is-link");
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