const createdAt= document.getElementsByClassName("createdAt");



const translateDate1 = () => {
    for(i=0 ; i< createdAt.length ; i++){
    const getContents = createdAt[i].innerHTML;
    const date = new Date(getContents);
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const pastTimes = new Date(Date.now() - date);
    const pastDays = pastTimes.getDate()-1;
    console.log(pastDays)

    createdAt[i].innerHTML = `Uploaded at: ${year}/${month}/${day}  ${hour}H ${minutes}min (${pastDays}days ago)`
    }
}

translateDate1();