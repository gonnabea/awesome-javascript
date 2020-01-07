const toDoInput = document.getElementById("toDoInput");
const toDoList = document.getElementById("toDoList");
const completedList = document.getElementById("completedList");
const completeTitle = document.getElementById("completeTitle");

let toDoArray = [];
let completedArray = [];

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

    const span2 = document.createElement("span");
    li.appendChild(span2);
    span2.id = li.id;
    span2.innerHTML = "Completed";
    span2.style.cursor = "pointer";
    span2.style.color = "yellowgreen";
    span2.addEventListener("click", completedToDo);
    loadToDo()
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
    li.innerHTML =`${i+1}. ${toDoArray[i]}`
    li.appendChild(span);
    span.id = li.id;
    span.innerHTML = "X";
    span.style.cursor = "pointer";
    span.style.color = "red";
    span.addEventListener("click", deleteToDo);

        const span2 = document.createElement("span");
    li.appendChild(span2);
    span2.id = li.id;
    span2.innerHTML = "Completed";
    span2.style.cursor = "pointer";
    span2.style.color = "yellowgreen";
    span2.addEventListener("click", completedToDo);
    
    }
}
}

const deleteToDo = (e) => {
    if(e.target.id===e.target.parentNode.id){
        e.target.parentNode.remove();
        toDoArray.splice(e.target.id,1);
        localStorage.setItem("toDoList", JSON.stringify(toDoArray));
        loadToDo();
    }
}

const completedToDo = (e) => {
    if(e.target.id===e.target.parentNode.id){
        e.target.parentNode.remove();
        const completed = toDoArray.splice(e.target.id,1);
        completedArray.push(completed);
        localStorage.setItem("toDoList", JSON.stringify(toDoArray));
        localStorage.setItem("CompletedList", JSON.stringify(completedArray));
        loadToDo();
        loadCompleted();
    }
}

const loadCompleted = () => {
    if(JSON.parse(localStorage.getItem("CompletedList"))){
        completedList.innerHTML="";
    const loadList = JSON.parse(localStorage.getItem("CompletedList"));
    completedArray = loadList;
    for(i=0; i<completedArray.length ; i++){
        const li = document.createElement("li");
        const span = document.createElement("span");
        completedList.appendChild(li);
    li.id = i;
    li.innerHTML = completedArray[i]
    li.appendChild(span);
    span.id = li.id;
    span.innerHTML = "X";
    span.style.cursor = "pointer";
    span.style.color = "red";
    span.addEventListener("click", deleteCompleted);
    }
}
}

const deleteCompleted = (e) => {
    if(e.target.id===e.target.parentNode.id){
        e.target.parentNode.remove();
        completedArray.splice(e.target.id,1);
        localStorage.setItem("CompletedList", JSON.stringify(completedArray));
        loadCompleted();
    }
}


const toDoEventListeners = () => {
    
    toDoInput.addEventListener("keydown", addToDo);
}

const initToDo = () => {
    loadToDo();
    toDoEventListeners();
    loadCompleted();
}



initToDo();