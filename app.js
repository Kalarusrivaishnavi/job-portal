const applybtn = document.querySelectorAll(".applybtn");
applybtn.forEach((btn) => {
     btn.addEventListener("click", () => {
    const jobName=btn.getAttribute("data-role");
    window.location.href = `apply.html?job=${jobName}`;
  });
    
});
  const form = document.querySelector("#applyform");
  if(form){
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const success = document.getElementById("success")
        success.style.display="block";
        form.reset();
    })
  }
  const params= new URLSearchParams(window.location.search);
  const job=params.get("job");
  if(job){
    document.getElementById("jobtitle").innerText=`Appliying for ${job}`;
  }

 