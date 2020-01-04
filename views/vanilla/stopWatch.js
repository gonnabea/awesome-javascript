const stopWatch = document.getElementById("stop-watch");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const initialTimeBtn = document.getElementById("initialTimeBtn");


let initTime = JSON.stringify(localStorage.getItem("timer"));
let interval = ""


if(initTime == "null" )
{
    const entry = new Date();
    entry.setHours(0,0,0);
     localStorage.setItem("timer", entry)
}else{
    initTime = new Date(initTime);
    const hours = initTime.getHours();
    const minutes = initTime.getMinutes();
    const seconds = initTime.getSeconds();

    stopWatch.innerHTML= `${hours >= 10 ? hours : `0${hours}`}:${minutes>=10 ? minutes : `0${minutes}`}:${seconds>=10 ? seconds : `0${seconds}`}`;
}


const startCount = () => {
    
    initTime = JSON.stringify(localStorage.getItem("timer"));
    initTime = new Date(initTime);
    initTime.setSeconds(initTime.getSeconds()+1);
    
    const hours = initTime.getHours();
    const minutes = initTime.getMinutes();
    const seconds = initTime.getSeconds();

    stopWatch.innerHTML= `${hours >= 10 ? hours : `0${hours}`}:${minutes>=10 ? minutes : `0${minutes}`}:${seconds>=10 ? seconds : `0${seconds}`}`;
    localStorage.setItem("timer", initTime);
    playBtn.innerHTML="중지";
    localStorage.setItem("playStatus", playBtn.innerHTML)
    playBtn.removeEventListener("click", count);
    playBtn.addEventListener("click", pauseCount)
}

const pauseCount = () => {
    clearInterval(interval)
    playBtn.innerHTML="시작"
    localStorage.setItem("playStatus", playBtn.innerHTML)
    playBtn.addEventListener("click", count)
}

const initialTime = () => {
    pauseCount();
    initTime = new Date(initTime);
    initTime.setHours(0,0,0);
    const hours = initTime.getHours();
    const minutes = initTime.getMinutes();
    const seconds = initTime.getSeconds();
    
    stopWatch.innerHTML= `${hours >= 10 ? hours : `0${hours}`}:${minutes>=10 ? minutes : `0${minutes}`}:${seconds>=10 ? seconds : `0${seconds}`}`;

    localStorage.setItem("timer", initTime);
}

function count(){
   interval= setInterval(startCount,1000)
}

function check(){
    if(localStorage.getItem("playStatus") == "중지"){
        count()
    }
}

const stopWatchInit = () => {
    initialTimeBtn.addEventListener("click",initialTime);
    playBtn.addEventListener("click", count);
    check()
}



stopWatchInit();