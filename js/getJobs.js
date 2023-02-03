// --->>> Methods <<<---

const getJobs = async()=>{

    try {
        const response = await fetch(`${BASE_URL}/jobs`);
        const jobs = await response.json();

        renderJobs(jobs);
    } catch (error) {
        alert("Error to get jobs!!")
    }

}

getJobs()

const getJob = async(id)=>{
    try {
        const response = await fetch(`${BASE_URL}/jobs/${id}`);
        const job = await response.json();

        showDetailJob(job);
        fillForm(job)
    } catch (error) {
        alert("Error to get job!!")
    }
}

// --->>> DOM <<<---

const renderJobs = (jobs) =>{

    $contCardsJobs.innerHTML = "";
    $contCardsJobs.innerHTML = `<div class="columns columns-cards-jobs is-flex is-flex-wrap-wrap"></div>`;

    for (const {name, description, location, seniority, category, id} of jobs) {
        $(".columns-cards-jobs").innerHTML += 
        `<div class="column is-one-quarter">
        <div class="card card-job">
            <header class="card-header">
                <p class="card-header-title has-text-link">
                  ${name}
                </p>
                
              </header>
              <div class="card-content">
                <div class="content">
                 <p>${description}</p>
                 <span class="tag m-1 has-background-link-light">${location}</span><span class="tag m-1 has-background-link-light">${seniority}</span><span class="tag m-1 has-background-link-light">${category}</span>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item" onclick="openDetailsJob(${id})">See Details</a>
              </footer>
        </div>`
    }
    }

const showDetailJob = (job)=>{
   $cardDetailTitle.innerText = job.name;
   $cardDetailDescription.innerText = job.description;
   $cardDetailLocation.innerText = job.location;
   $cardDetailSeniority.innerText = job.seniority;
   $cardDetailCategory.innerText = job.category;

}

const openDetailsJob = (id) => {
    changeScreen($$sections, $sectionSeeDetails)
     
    $btnModalDeleteJob.setAttribute("data-id", id);
    $btnSubmitEditForm.setAttribute("data-id", id);

    getJob(id)
    
}

