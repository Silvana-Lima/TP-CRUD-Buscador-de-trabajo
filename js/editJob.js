// --->>> Methods <<<---

const editJob = async(id)=>{

    try {
        const job = getUpdateJob();

        await fetch(`${BASE_URL}/jobs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "Application/json"
            },
            body: JSON.stringify(job)
        });
      
    } catch (error) {
        alert(`"Error to edit job with id: ${id}"`)
    } finally {
        window.location.href = "index.html";
    }
}

// --->>> DOM <<<---

const fillForm = (job)=>{
    $inputTitleEditJob.value = job.name;
    $textAreaDescriptionEditJob.value = job.description;
    $inputLocationEditJob.value = job.location;
    $inputSeniorityEditJob.value = job.seniority;
    $inputCategoryEditJob.value = job.category;
}

const getUpdateJob = ()=> {
    const job = {name: $inputTitleEditJob.value,
    description: $textAreaDescriptionEditJob.value,
    location: $inputLocationEditJob.value,
    seniority: $inputSeniorityEditJob.value,
    category: $inputCategoryEditJob.value};

    return job;

}

// --->>> Events <<<---

$btnEditJob.addEventListener("click", ()=>{
    $contEditJob.classList.remove("is-hidden");

})

$btnSubmitEditForm.addEventListener("click", (e)=>{
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    editJob(id);
})