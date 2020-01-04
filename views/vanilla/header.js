const header = document.getElementById("header-body")

const handleScroll = () =>{
    const sticky = header.offsetTop;
    if(sticky < window.pageYOffset){
       header.classList.add('sticky')
    } else {
        header.classList.remove("sticky");
    }
}

const headerInit = () => {
    window.addEventListener("scroll",handleScroll)
}

headerInit()