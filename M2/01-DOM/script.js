let toDoItems = [];
console.log(toDoItems)

let span = document.querySelector("#createdBy");
span.innerHTML = span.innerHTML + " Tiago";

function ToDo(description) {
    this.description = description;
    this.complete = false;
}

ToDo.prototype.completeToDo = function () {
    this.complete = true;
}

function buildToDo(todo, index) {//{description:"aaasa",complete:false}, 0

    let toDoShell = document.createElement("div");//div
    toDoShell.className = "toDoShell";//

    let toDoText = document.createElement("span");
    toDoText.innerHTML = todo.description;

    toDoText.setAttribute("id", index);

    if (todo.complete) {
        toDoShell.className = "completeText";
    }

    toDoShell.appendChild(toDoText);

    toDoText.addEventListener("click", completeToDoHandler);

    return toDoShell;
}

function buildToDos(toDos) {
    return toDos.map(buildToDo);
}

function displayToDos() {
    let toDoContainer = document.querySelector("#toDoContainer");
    toDoContainer.innerHTML = "";

    let builds = buildToDos(toDoItems);//[]

    for (let i = 0; i < builds.length; i++) {
        toDoContainer.appendChild(builds[i]);
    }
}

function addToDo() {
    let input = document.querySelector("#toDoInput");

    if (input.value !== "") {
        let toDo = new ToDo(input.value);
        //{description:"aaasa",complete:false}
        toDoItems.push(toDo);//[{description:"aaasa",complete:false},]
        input.value = "";

        displayToDos();
    }
}

function completeToDoHandler(event) {
    const index = event.target.id;
    toDoItems[index].completeToDo();
    displayToDos();
}

let add = document.querySelector("#addButton");
add.addEventListener("click", addToDo);