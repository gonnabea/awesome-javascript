const list = document.getElementById("list");
const listTitle = document.getElementById("listTitle");
const listContainer = document.getElementById("list-container")

const hideList = () => {
    list.style.display = "none"
    listContainer.style.backgroundColor = "transparent"
    
}

const showingList = () => {
    list.style.display = "block"
    listContainer.style.backgroundColor = "rgba(0,0,0,0.7)"
}



const listEventListeners = () => {
    listTitle.addEventListener("mouseover", showingList)
    listContainer.addEventListener("mouseleave", hideList)
    
}

const listInit = () => {
    listEventListeners();
    hideList();
}

listInit();