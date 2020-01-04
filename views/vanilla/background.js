const image1 = () => {
    document.body.style.background = "url('https://img.wallpapersafari.com/desktop/1920/1080/85/47/irGxpK.jpg')",
    document.body.style.backgroundRepeat = "no-repeat",
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "black";
    document.body.style.zIndex = "1"
    document.body.style.backgroundAttachment = "fixed";
};

const image2 = () => {
    document.body.style.background = "url('https://cdn.dribbble.com/users/1410984/screenshots/3176480/_______________________________.gif')",
    document.body.style.backgroundRepeat = "no-repeat",
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundColor = "black"
    document.body.style.zIndex = "1"
    
}

const image3 = () => {
    document.body.style.background = "url('https://media3.giphy.com/media/10ySCDq1TBfFWo/source.gif')",
    document.body.style.backgroundRepeat = "no-repeat",
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundColor = "black"
    document.body.style.zIndex = "1"
    document.body.style.backgroundPosition = "-100px"
}

const randomBox = () => {
    const randomFigure = Math.floor(Math.random()*10);
    if(randomFigure < 10 && randomFigure > 6)
    {image1()}
    else if(randomFigure < 7 && randomFigure < 3)
    {image2()}
    else{
        image3()
    }
    console.log(`randomFugure: ${randomFigure}`)
};

randomBox();

