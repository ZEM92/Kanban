function initArchive() {
  setTimeout(() => {
    renderArchive();
  }, 300);
}

function renderArchive() {
  let archiv = document.getElementById("archiveBox");
  archiv.innerHTML = ``;

  for (let i = 0; i < task.length; i++) {
    const element = task[i];

    let title = element.title;
    let dueDate = element.dueDate;
    let category = element.category;
    let urgency = element.urgency;
    console.log(title, dueDate, category, urgency);

    archiv.innerHTML += `
        <div class="backlogCard">
       
            <div class="assignedToText width30">
                    <span class="namebacklog">Britney </span> <br>
            </div>
            <div class="backlogCardCategory width20">
                <span>${category} </span>
            </div>
            <div class="backlogCardDetails width50bl">
                <span>${title}</span>                    
            </div>
            <img src="img/trashGrey.png" alt="trash icon" class="trash-archive" onclick="deleteTask(${element.id})">
        </div>   
    `;
  }
}

async function deleteTask(id) {
  let deleteTask = task.find((t) => t["id"] == id);
  let test = task.indexOf(deleteTask);
  task.splice(test, 1);
  let allTasksAsString = JSON.stringify(task);
  await backend.setItem("task", allTasksAsString);
  initArchive();
}

function deleteUser(name) {
  backend.deleteItem("users");
}
