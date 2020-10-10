const toDoForm = document.querySelector(".js-toDoForm"), 
toDoInput = toDoForm.querySelector("input"), 
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const TODOS = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(TODOS));
    //스토리지에는 string만 저장 가능
}

function paintToDo(text) {
    const LI = document.createElement("li");
    const DELBTN = document.createElement("button");
    const SPAN = document.createElement("span");
    const newId = TODOS.length + 1;
    DELBTN.innerText = "❌"; //win + .
    SPAN.innerText = text;
    LI.appendChild(SPAN);
    LI.appendChild(DELBTN);
    LI.id = newId;
    toDoList.appendChild(LI);
    const toDoOjb = {
        text: text, 
        id: newId
    };
    TODOS.push(toDoOjb);
    saveToDos(); //배열에 먼저 저장을 해야 스토리지에 저장할 요소가 생성됨
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDO) {
            paintToDo(toDO.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();