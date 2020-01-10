

const shareSelector = document.getElementById("shareSelector");
const sharedStatus = document.getElementById("sharedStatus");
const postComment = document.getElementById("postComment");
const contents = document.getElementById("contentsOfComment");
const newComment = document.getElementById("newComment");
const commentAuthor = document.getElementById("commentAuthor");
const commentContents = document.getElementById("commentContents");
const commentCreatedAt = document.getElementById("commentCreatedAt");
   

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
    const span = document.createElement("span");
    commentAuthor.innerHTML = "You : "
    commentContents.innerHTML = commentValue;
    commentCreatedAt.innerHTML = new Date();

    handleAddedComment(commentValue)
}

const handleAddedComment = async(commentValue) => {
    const response = await axios({
        url:`/videos/${videoId}/video-comment`,
        method: "post",
        data: {
            comment: commentValue
        }
    })
    console.log(response);
}

const apisInit = () => {
    shareSelector.addEventListener("click", changeShareStatus);
    postComment.addEventListener("submit", handleCommentSubmit);
}

apisInit();