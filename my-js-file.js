const taskContainer= document.querySelector(".task__container");
console.log(taskContainer);
const saveChanges=()=>{
    console.log("hello");
    const taskData={
        id: `${Date.now()}`,
        imgUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskdesc:document.getElementById("taskdescription").value,
    };
    const newCard=`
    <div class="col-sm-12 col-md-6 col-lg-4 ">
            <div class="card" id=${taskData.id}>
              <div class="card-header d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-outline-success"><i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
                <button type="button" class="btn btn-outline-danger"><i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <div class="card-body">
                <img src=${taskData.imgUrl} class="card-img-top" alt="...">
                <h5 class="card-title mt-3 fw-bolder text-primary">${taskData.taskTitle}</h5>
                <p class="card-text">${taskData.taskdesc}</p>
                <a href="#" class="btn btn-primary">${taskData.taskType}</a>
              </div>
            </div>
          </div>
    `;
    taskContainer.insertAdjacentHTML("beforeend",newCard);
    
}