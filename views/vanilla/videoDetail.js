const shareSelector = document.getElementById("shareSelector");
const sharedStatus = document.getElementById("sharedStatus");



const changeShareStatus = () => {
    const videoId = window.location.href.split("/videos/")[1]
    fetch(`/videos/${videoId}/share-selector`,{method:"POST"});
    if(sharedStatus.innerHTML==="shared"){
    sharedStatus.innerHTML = "not shared"
    }else{
        sharedStatus.innerHTML = "shared" 
    }
}

const apisInit = () => {
    shareSelector.addEventListener("click", changeShareStatus)
}

apisInit();