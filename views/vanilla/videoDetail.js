const shareSelector = document.getElementById("shareSelector");
const sharedStatus = document.getElementById("sharedStatus");
const postComment = document.getElementById("postComment");
const contents = document.getElementById("contentsOfComment");
const newComment = document.getElementById("newComment");
const newCommentList = document.getElementById("newCommentList");
const deleteVideoComment = document.getElementsByClassName("deleteVideoComment");



 


const videoId = window.location.href.split("/videos/")[1];


const changeShareStatus = () => {
    fetch(`/videos/${videoId}/share-selector`,{method:"POST"});
    if(sharedStatus.innerHTML==="shared"){
    sharedStatus.innerHTML = "not shared"
    }else{
        sharedStatus.innerHTML = "shared" 
    }
}

const handleCommentSubmit = async(e) => {
    e.preventDefault();
    const commentValue = await contents.value;
    handleAddedComment(commentValue);
}

const handleAddedComment = async(commentValue) => {
    const response = await axios({
        url:`/videos/${videoId}/video-comment`,
        method: "post",
        data: {
            comment: commentValue
        }
    })
    
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    const div = document.createElement("div");
    span1.innerHTML = "You : "
    span2.innerHTML = commentValue;
    span3.innerHTML = new Date();
    div.appendChild(span1)
    div.appendChild(span2)
    div.appendChild(span3)
    newCommentList.appendChild(div);
    //const commentId = e.target.action.split(/videos/)[1].split(/video-comment/)[0];
    //const form = document.createElement("form");
    //form.className = "deleteVideoComment";
    //form.method="post";
    //form.action=`/videos${commentId}delete-video-comment`;
    //form.innerHTML = '<input type="submit" value="X">';
    //div.appendChild(form);
    //form.addEventListener("submit", handleDeleteSubmit);
    
}

const handleDeleteSubmit = async(e) => {
    
    e.preventDefault();
    
    const commentId = e.target.action.split(/videos/)[1];
    
    await axios({
        url:`/videos${commentId}`,
        method: "post"
    });
    e.target.parentNode.remove()
}

const apisInit = () => {
    shareSelector.addEventListener("click", changeShareStatus);
    postComment.addEventListener("submit", handleCommentSubmit);
    if(deleteVideoComment){
    for(i=0 ; i<deleteVideoComment.length ; i++){
    deleteVideoComment[i].addEventListener("submit", handleDeleteSubmit);
    }
    }
}

apisInit();