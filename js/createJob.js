// --->>> Methods <<<---

const createJob = async()=>{

    try {
        const job = getJobForm()

        await fetch(`${BASE_URL}/jobs`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(job)
        });
    } catch (error) {
        alert("Error to creating job!!")
    } finally {
        window.location.href = "index.html";
    }

}

// --->>> DOM <<<---

const getJobForm = ()=>{
    const job = {
        name: $inputTitleCreateJob.value,
        description: $inputDescriptionCreateJob.value,
        location: $inputLocationCreateJob.value,
        seniority: $inputSeniorityCreateJob.value,
        category: $inputCategoryCreateJob.value

    }

    return job;

}

const cleanerFormCreateJobs = ()=>{
 $inputTitleCreateJob.value = "";
 $inputDescriptionCreateJob.value = "";
 $inputLocationCreateJob.value = "";
 $inputSeniorityCreateJob.value = "";
 $inputCategoryCreateJob.value = "";

 $errorNotification.classList.add("is-hidden");

 changeColorInput($inputTitleCreateJob, "is-danger", "is-link");
 changeColorInput($inputDescriptionCreateJob, "is-danger", "is-link");
 changeColorInput($inputLocationCreateJob, "is-danger", "is-link");
 changeColorInput($inputSeniorityCreateJob, "is-danger", "is-link");
 changeColorInput($inputCategoryCreateJob, "is-danger", "is-link");

}


// --->>> Events <<<---

$formCreateJob.addEventListener("submit", (e)=>{
   e.preventDefault();
   validateForm();
   showErrors();

})