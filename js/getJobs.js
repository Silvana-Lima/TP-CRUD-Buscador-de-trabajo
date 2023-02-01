// --->>> DOM <<<---

const renderJobs = (jobs) =>{
    for (const {name, description, location, seniority, category} of jobs) {
        $contCards.innerHTML += 
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
                <a href="#" class="card-footer-item">See Details</a>
              </footer>
        </div>`
    }
    }

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

