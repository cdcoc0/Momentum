const toDoForm = document.querySelector(".js-toDoForm"), 
toDoInput = toDoForm.querySelector("input"), 
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
    const LI = document.createElement("li");
    const DELBTN = document.createElement("button");
    DELBTN.innerText = "❌"; //win + .
    const SPAN = document.createElement("span");
    SPAN.innerText = text;
    LI.appendChild(SPAN);
    LI.appendChild(DELBTN);
    toDoList.appendChild(LI);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();