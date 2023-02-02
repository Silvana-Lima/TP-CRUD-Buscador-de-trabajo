// --->>> Methods <<<---

const deleteJob = async(id)=>{
    try {
        await fetch(`${BASE_URL}/jobs/${id}`, {
            method: "DELETE",
        });
      
    } catch (error) {
        alert(`"Error to delete job with id: ${id}"`)
    } finally {
        window.location.href = "index.html";
    }
}

// --->>> Events <<<---

$btnDeleteJob.addEventListener("click", ()=> $modalDeleteJob.classList.add("is-active"))

$btnModalDeleteJob.addEventListener("click", (e)=>{
    $modalDeleteJob.classList.remove("is-active");
    const id = e.target.getAttribute("data-id");
    deleteJob(id) 
})

$btnModalCancelDelete.addEventListener("click", ()=>{
    $modalDeleteJob.classList.remove("is-active");
    changeScreen($$sections, $sectionHome);
})