// --->>> DOM <<<---

const completeSelect = (jobs) => {
    $selecLocation.innerHTML = "";
    $selecSeniority.innerHTML = "";
    $selecCategory.innerHTML = "";

    $selecLocation.innerHTML = `<option value="Location">Location</option>`;
    $selecSeniority.innerHTML = `<option value="Seniority">Seniority</option>`;
    $selecCategory.innerHTML = `<option value="Category">Category</option>`;

  const removeLocationsDuplicates = jobs.reduce((acc, item) => {
    if (!acc.includes(item.location)) {
      acc.push(item.location);
    }
    return acc;
  }, []);

  for (const location of removeLocationsDuplicates) {
    $selecLocation.innerHTML += `<option value="${location}">${location}</option>`;
  }

  const removeSeniorityDuplicates = jobs.reduce((acc, item) => {
    if (!acc.includes(item.seniority)) {
      acc.push(item.seniority);
    }
    return acc;
  }, []);

  for (const seniority of removeSeniorityDuplicates) {
    $selecSeniority.innerHTML += `<option value="${seniority}">${seniority}</option>`;
  }

  const removeCategoryDuplicates = jobs.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  for (const category of removeCategoryDuplicates) {
    $selecCategory.innerHTML += `<option value="${category}">${category}</option>`;
  }
};

const filterByLocation =(filter, jobs)=>{

    let location = [];
    if (filter === "Location") {
      location = jobs;
    } else {
      location = jobs.filter((job)=> job.location == filter)
    }
    return location;
    
}

const filterBySeniority =(filter, jobs)=>{

  let seniority = [];
  if (filter === "Seniority") {
    seniority = jobs;
  } else {
    seniority = jobs.filter((job)=> job.seniority == filter)
  }
  return seniority;
  
}

const filterByCategory =(filter, jobs)=>{

  let category = [];
  if (filter === "Category") {
    category = jobs;
  } else {
    category = jobs.filter((job)=> job.category == filter)
  }
  return category;
  
}
const filterJobs = (jobs)=>{
  let jobsFiltered = filterByLocation($selecLocation.value, jobs);
  jobsFiltered = filterBySeniority($selecSeniority.value, jobsFiltered);
  jobsFiltered = filterByCategory($selecCategory.value, jobsFiltered);

  if (jobsFiltered.length === 0 ) {
    $contNoResults.innerHTML = `<p class="has-text-centered mt-4 has-text-link has-text-weight-bold">
    There are not results for your search...
  </p>`
  } else {
    $contNoResults.innerHTML = ``
  }
  
  return jobsFiltered;
}

// --->>> Events <<<---

$formSearchJob.addEventListener("submit", (e)=>{
    e.preventDefault();
   getJobs()
})

$btnClear.addEventListener("click", (e)=>{
  e.preventDefault();
  window.location.href = "index.html"
})

