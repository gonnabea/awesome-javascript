const inputTitle = document.getElementById("inputTitle");

function handleTitleHover(){
    console.log("this is working!");
    inputTitle.style.animation="showImage 2s forwards"
    
}


function videoUploadInit(){
    inputTitle.addEventListener("mouseover", handleTitleHover);
}

videoUploadInit()