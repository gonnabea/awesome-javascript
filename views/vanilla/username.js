
const inputName = document.getElementById('username');
const name = document.getElementById("name");

const handleSubmit = (e) => {
    if(e.keyCode === 13 && inputName.value){
    const startSound = new Audio()
    startSound.src='/sound-effects/start.wav'
    startSound.play();
    const span = document.createElement("span");
    localStorage.setItem("username", inputName.value);
    name.innerHTML=`Hello, ${inputName.value}! nice to meet you! `;
    
    name.appendChild(span);
    span.id= "deleteNameBtn";
    span.innerHTML='<i class="fas fa-pencil-alt"></i>';
    span.style.color="red";
    span.style.fontSize="20px";
    span.addEventListener("click", handleDeleteName);
    span.style.cursor = "pointer";
    inputName.style.display ='none';
    }
}

const handleDeleteName = () => {
    inputName.style.display ='block';
    const deleteNameBtn = document.getElementById("deleteNameBtn");
    name.innerHTML="";
    deleteNameBtn.remove();
    localStorage.removeItem("username")
}

const loadName = () => {
    const savedName = localStorage.getItem("username");
    if(savedName){
        inputName.style.display ='none';
        name.innerHTML= savedName;
        const span = document.createElement("span");
        name.innerHTML=`Welcome, ${savedName}! How's it going? `;
        
        span.id= "deleteNameBtn";
        span.innerHTML='<i class="fas fa-pencil-alt"></i>';
        span.style.color="red";
        span.style.fontSize="20px";
        span.style.cursor = "pointer";
        span.addEventListener("click", handleDeleteName);
        name.appendChild(span);
        inputName.style.display ='none';
    }
}

const nameEventListeners = () => {
    inputName.addEventListener("keydown", handleSubmit)
}

function initName(){
    loadName();
    nameEventListeners();
}

initName();