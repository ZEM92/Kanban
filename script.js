let users = [];

function addUser() {
  users.push("John");
  backend.setItem("users", JSON.stringify(users));
}

//* TEMPLATE  */
async function init() {
  await includeHTML();
}
async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/navbar.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}
/** DRAG & DROP  */
let todos = [
  {
    id: 0,
    title: "putzen",
    category: "open",
  },
  {
    id: 1,
    title: "kochen",
    category: "open",
  },
  {
    id: 2,
    title: "einkaufen",
    category: "closed",
  },
];
let currentDraggedElement;
function updateHTML() {
  let open = todos.filter((t) => t["category"] == "open");
  document.getElementById("open").innerHTML = "";
  for (let index = 0; index < open.length; index++) {
    const element = open[index];
    document.getElementById("open").innerHTML += generateTodoHTML(element);
  }
  let closed = todos.filter((t) => t["category"] == "closed");
  document.getElementById("closed").innerHTML = "";
  for (let index = 0; index < closed.length; index++) {
    const element = closed[index];
    document.getElementById("closed").innerHTML += generateTodoHTML(element);
  }
}
function startDragging(id) {
  let currentDraggedElement = id;
}
function generateTodoHTML(element) {
  return `<div draggable="true" ondraggstart="startDragging(${element["id"]})" class="todo">${element["title"]}</div>`;
}
