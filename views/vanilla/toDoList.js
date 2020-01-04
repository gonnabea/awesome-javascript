const toDoInput = document.getElementById("toDoInput");
const toDoList = document.getElementById("toDoList")

let toDoArray = [];

const addToDo = (e) => {
    if(e.keyCode === 13 && toDoInput.value){
        toDoArray.push(toDoInput.value);
    const li = document.createElement("li");
    const span = document.createElement("span");
    toDoList.appendChild(li)
    li.id=toDoArray.length-1
    li.innerHTML = toDoArray[toDoArray.length-1]
    li.appendChild(span);
    span.id = li.id;
    span.innerHTML = "X";
    span.style.cursor = "pointer";
    span.style.color = "red";
    span.addEventListener("click", deleteToDo);
    localStorage.setItem("toDoList", JSON.stringify(toDoArray));
    toDoInput.value="";
    }
}

const loadToDo = () => {
    if(localStorage.getItem("toDoList")){
    toDoList.innerHTML="";
    const loadList = JSON.parse(localStorage.getItem("toDoList"));
    toDoArray = loadList;
    for(i=0; i<toDoArray.length ; i++){
        const li = document.createElement("li");
        const span = document.createElement("span");
        toDoList.appendChild(li);
    li.id = i;
    li.innerHTML = toDoArray[i]
    li.appendChild(span);
    span.id = li.id;
    span.innerHTML = "X";
    span.style.cursor = "pointer";
    span.style.color = "red";
    span.addEventListener("click", deleteToDo);
    }
}
}

const deleteToDo = (e) => {
    if(e.target.id===e.target.parentNode.id){
        e.target.parentNode.remove();
        const deleted = toDoArray.splice(e.target.id,1);
        localStorage.setItem("toDoList", JSON.stringify(toDoArray));
        loadToDo();
    }
}

const toDoEventListeners = () => {
    
    toDoInput.addEventListener("keydown", addToDo);
}

const initToDo = () => {
    loadToDo();
    toDoEventListeners();
}



initToDo();