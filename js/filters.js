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
