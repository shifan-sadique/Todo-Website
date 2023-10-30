const taskContainer= document.querySelector(".task__container");

const globalStore=[];

console.log(taskContainer);

const generateNewCard= (taskData) =>   `
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
  `

const loadInitialCardData= () =>{
  console.log("woks fine");
  //local storage for storing card data
  const getCardData= localStorage.getItem("Tasky");

  //convert json string to a normal object
  const {cards}=JSON.parse(getCardData);

  //looping throung individula cards
  cards.map((cardsObject) => {
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardsObject));

    globalStore.push(cardsObject);
    
  })
}

const saveChanges=()=>{
    console.log("hello");
    const taskData={
        id: `${Date.now()}`,
        imgUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskdesc:document.getElementById("taskdescription").value,
    };
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

    globalStore.push(taskData);
    localStorage.setItem("Tasky",JSON.stringify({cards:globalStore}));
    
}