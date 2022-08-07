function initFilter() {
  setTimeout(() => {
    filterAll();
  }, 300);
}

function clearAllGreyContainer() {
  document.getElementById("toDo").innerHTML = ``;
  document.getElementById("inProgress").innerHTML = ``;
  document.getElementById("testing").innerHTML = ``;
  document.getElementById("done").innerHTML = ``;
}

//diese Funktion filter das array "task" in dem alle tasks stehen anhand den Kategorien
//und  weißt sie entweder der variable progressTasks testingTasks oder doneTasks zu
function filterAll() {
  clearAllGreyContainer();
  //filter nach todo
  let todoTasks = task.filter((t) => t["status"] == `toDo`);
  for (let i = 0; i < todoTasks.length; i++) {
    const element = todoTasks[i];
    document.getElementById("toDo").innerHTML += generateHTML(element);
  }
  //filtert nach inProgress
  let progressTasks = task.filter((t) => t["status"] == `inProgress`);
  for (let i = 0; i < progressTasks.length; i++) {
    const element = progressTasks[i];
    document.getElementById("inProgress").innerHTML += generateHTML(element);
  }
  //filtert nach testing
  let testingTasks = task.filter((t) => t["status"] == `testing`);
  for (let i = 0; i < testingTasks.length; i++) {
    const element = testingTasks[i];
    document.getElementById("testing").innerHTML += generateHTML(element);
  }
  //filtern nach done
  let doneTasks = task.filter((t) => t["status"] == `done`);
  for (let i = 0; i < doneTasks.length; i++) {
    const element = doneTasks[i];
    document.getElementById("done").innerHTML += generateHTML(element);
  }
}

//task.find(ticket => ticket.id == currentDraggedElement);

function renderBoard() {
  let toDo = document.getElementById("toDo");

  for (let i = 0; i < task.length; i++) {
    const element = task[i];

    let title = element.title;
    let dueDate = element.dueDate;
    let category = element.category;
    let urgency = element.urgency;
    let num = element.id;
    //console.log(title , dueDate , category , urgency , num )

    toDo.innerHTML += `
        <div class="drop-element" id="${num}" draggable="true" ondragstart="startDragging(${num})">
        <img class="boardImg" src="Profilpicture/profilepicture1.png">
        <div class="wrapper-card-elements">
            <h3 class="h3-not-center">${title}</h3>
            <span class="card-span">${category}</span><br>
            <span class="card-span">${dueDate}</span>
        </div>
        
    </div>
    `;
  }
}

function deleteTask(id) {
  let element = task.find((ticket) => ticket.id == id);
  element["status"] = "archive";
  initFilter();
  console.log(element);
}

function updateBoard() {
  let progressTasks = task.filter((t) => t["status"] == `inProgress`);
  let inProgressHTML = document.getElementById("inProgess");
  inProgressHTML += generateHTML(progressTasks);
}

function generateHTML(element) {
  return `
    <div class="drop-element" id="${element.id}" draggable="true" ondragstart="startDragging(${element.id})">
        <img class="boardImg" src="Profilpicture/profilepicture1.png">
        <div class="wrapper-card-elements">
        <h3 class="h3-not-center">${element.title}</h3>
        <span class="card-span">${element.category}</span><br>
        <span class="card-span">${element.dueDate}</span>
        <img src="img/trash.png" onclick="deleteTask(${element.id})" class="delete-task">
    </div>
    `;
}
