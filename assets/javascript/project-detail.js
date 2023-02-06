let projectsData = [];
function addProject(e) {
  e.preventDefault();

  let projectName = document.getElementById("project-title").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let description = document.getElementById("description").value;
  let technology1 = document.getElementById("c1").checked ? document.getElementById("c1").value : false;
  let technology2 = document.getElementById("c2").checked ? document.getElementById("c2").value : false;
  let technology3 = document.getElementById("c3").checked ? document.getElementById("c3").value : false;
  let technology4 = document.getElementById("c4").checked ? document.getElementById("c4").value : false;
  let uploadImage = document.getElementById("upload-box").files;

  if (technology1 == false && technology2 == false && technology3 == false && technology4 == false) {
    alert("input at least 1 technology!");
  } else if (uploadImage.length == 0) {
    alert("Input project image!");
  } else {
    uploadImage = URL.createObjectURL(uploadImage[0]);
    technology1 = technology1 != false ? `<i class="fa-brands ${technology1} fa-3x"></i>` : false;
    technology2 = technology2 != false ? `<i class="fa-brands ${technology2} fa-3x"></i>` : false;
    technology3 = technology3 != false ? `<i class="fa-brands ${technology3} fa-3x"></i>` : false;
    technology4 = technology4 != false ? `<i class="fa-brands ${technology4} fa-3x"></i>` : false;
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    let duration = Math.floor((endDate - startDate) / (30 * 24 * 60 * 60 * 1000));
    if (duration > 0) duration = `${duration} month${duration > 1 ? "s" : ""}`;
    else {
      duration = Math.floor((endDate - startDate) / (7 * 24 * 60 * 60 * 1000));
      if (duration > 0) duration = `${duration} week${duration > 1 ? "s" : ""}`;
      else {
        duration = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000));
        if (duration > 0) duration = `${duration} day${duration > 1 ? "s" : ""}`;
        else {
          duration = Math.floor((endDate - startDate) / (60 * 60 * 1000));
          if (duration > 0) duration = `${duration} hour${duration > 1 ? "s" : ""}`;
          else {
            duration = Math.floor((endDate - startDate) / (60 * 1000));
            if (duration > 0) duration = `${duration} minute${duration > 1 ? "s" : ""}`;
            else {
              duration = Math.floor((endDate - startDate) / 1000);
              if (duration > 0) duration = `${duration} second${duration > 1 ? "s" : ""}`;
              else duration = "less than a day";
            }
          }
        }
      }
    }

    let projectData = {
      projectName,
      startDate,
      endDate,
      duration,
      description,
      technology1,
      technology2,
      technology3,
      technology4,
      uploadImage,
    };
    projectsData.push(projectData);
    renderProject();
  }
}
function renderProject() {
  console.log(projectsData);
  document.getElementById("content-container").innerHTML = "";
  for (let project of projectsData) {
    document.getElementById("content-container").innerHTML += `
    <a href="Project.html">
    <div class="content1" id="content1">
            <img src="${project.uploadImage}" alt="coding" />
            <h1 class="blog-title">${project.projectName}</h1>
            <p class="blog-detail">${project.duration}</p>
            <p class="blog-article">${project.description}</p>
            <div class="blog-icon">
            ${project.technology1 != false ? project.technology1 : ""}
            ${project.technology2 != false ? project.technology2 : ""}
            ${project.technology3 != false ? project.technology3 : ""}
            ${project.technology4 != false ? project.technology4 : ""}
            </div>
            <div class="blog-btn">
              <button>edit</button>
              <button>delete</button>
            </div>
          
         </div> </a
        >
    `;
  }
}
