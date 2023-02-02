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

$btnDeleteJob.addEventListener("click", (e)=>{
    const id = e.target.getAttribute("data-id");
    deleteJob(id)
})