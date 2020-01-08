import routes from "../routes";
import Video from "../model/video";
import UrlVideo from "../model/urlVideo";
import EmbeddedVideo from "../model/embeddedVideo";
import Comment from "../model/comment";
import User from "../model/user";

export const videoStorage = async(req, res) => {
    const videos = await Video.find({})
    const urlVideos = await UrlVideo.find({})
    const embeddedVideo = await EmbeddedVideo.find({})
    res.render("videosPage", {title: "VIDEO STORAGE" , videos , urlVideos, embeddedVideo})
}

export const uploadVideo = (req, res) => {
    
    res.render("videoUpload", {title: "VIDEO UPLOAD"})
}

export const postUploadVideo = async(req, res) => {
    const {
        file:{path},
        body:{title, description}
    } = req;
    console.log(path)
    
    
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description,
        creator: req.user.id,
        uploadedBy: req.user.name
    })
    console.log(newVideo)
    res.redirect(routes.videoDetail(newVideo.id))
}

export const postUrlVideo = async(req, res) =>{
    const {
        body:{url, title, description}
    } = req;
    console.log(req.body)
    const newVideo = await UrlVideo.create({
        url,
        title,
        description,
        creator: req.user.id,
        uploadedBy: req.user.name
    })
    console.log(newVideo)
    res.redirect(routes.videoDetail(newVideo.id))
}

export const postEmbedded = async(req, res) => {
    const {
        body: {title, description, url}
    } = req;
    const newVideo = await EmbeddedVideo.create({
        title,
        description,
        url,
        creator: req.user.id,
        uploadedBy: req.user.name
    })
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id))
}

export const videoDetail = async(req, res) => {
    const {
        params:{id}
        
    } = req;
    
    try {
        const video = await Video.findById(id);
        const urlVideo = await UrlVideo.findById(id);
        const embeddedVideo = await EmbeddedVideo.findById(id).populate("comment").populate("createdBy")
        let i=0;
        let commentsList = [];
        while(i<embeddedVideo.comment.length){
        const commentMaker = await User.findById(embeddedVideo.comment[i].createdBy);
        commentsList.push(commentMaker);
        i++
        }
        if(req.user&&embeddedVideo&&embeddedVideo.creator == req.user.id || embeddedVideo&&embeddedVideo.sharedStatus === "shared"){
        res.render("videoDetail", {title:"VIDEO-DETAIL", embeddedVideo,video,urlVideo,commentsList})
        }else if(req.user&&video&&video.creator == req.user.id || video&&video.sharedStatus === "shared"){
        res.render("videoDetail", {title:"VIDEO-DETAIL", embeddedVideo,video,urlVideo})
        }else if(req.user&&urlVideo&&urlVideo.creator == req.user.id || urlVideo&&urlVideo.sharedStatus === "shared"){
            res.render("videoDetail", {title:"VIDEO-DETAIL", embeddedVideo,video,urlVideo})
        }
        else{
            res.redirect(routes.videoStorage)
        }
    }catch(error){
        console.log(`HERE!!::${error}`)
        res.redirect(routes.videoStorage);
    }
}

export const postComment = async(req, res) => {
    const {
        params:{id},
        body: {comment}
    } = req;

    try{
        const embeddedVideo = await EmbeddedVideo.findById(id);
        const newComment = await Comment.create({
            createdBy: req.user.id,
            contents: comment
        })
        
        embeddedVideo.comment.push(newComment._id)
        
        embeddedVideo.save();
    }catch(error){
        console.log(error);
    }
    res.redirect(routes.videoDetail(id));

}

export const deleteComment = async(req, res) => {
    const {
        params: {id}
    } = req;
    try{
        console.log(id)
        await Comment.findByIdAndRemove({_id:id})
        
        
    }catch(error){
        console.log(error);
    }
    res.redirect(routes.videoStorage);
}

export const deleteVideo = async(req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);
        const urlVideo = await UrlVideo.findById(id);
        const embeddedVideo = await EmbeddedVideo.findById(id);
        
        console.log(video)
        console.log(req.user.id)

        if(embeddedVideo&&req.user&&embeddedVideo.creator == req.user.id){
        await EmbeddedVideo.findByIdAndRemove(id)
        }else if(videoDetail&&req.user&&video.creator == req.user.id){
            await Video.findByIdAndRemove(id)
        }else if(urlVideo&&req.user&&urlVideo.creator == req.user.id){
            await UrlVideo.findByIdAndRemove(id)
        }
        
        else{
            res.redirect(routes.home)
        }
    }catch(error){
        console.log(error)
    }
    res.redirect(routes.videoStorage);
}

export const shareSelector = async(req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);
        const urlVideo = await UrlVideo.findById(id);
        const embeddedVideo = await EmbeddedVideo.findById(id);
    if(embeddedVideo&&embeddedVideo.sharedStatus==="not shared" && req.user.id == embeddedVideo.creator){
        await EmbeddedVideo.findByIdAndUpdate(id,{sharedStatus:"shared"})
    }else if(embeddedVideo&&embeddedVideo.sharedStatus==="shared" && req.user.id == embeddedVideo.creator){
        await EmbeddedVideo.findByIdAndUpdate(id,{sharedStatus:"not shared"});
    }else if(video&&video.sharedStatus==="not shared" && req.user.id == video.creator){
        await Video.findByIdAndUpdate(id,{sharedStatus:"shared"});
    }else if(video&&video.sharedStatus==="shared" && req.user.id == video.creator){
        await Video.findByIdAndUpdate(id,{sharedStatus:"not shared"});
    }else if(urlVideo&&urlVideo.sharedStatus==="not shared" && req.user.id == urlVideo.creator){
        await UrlVideo.findByIdAndUpdate(id,{sharedStatus:"shared"});
    }else if(urlVideo&&urlVideo.sharedStatus==="shared" && req.user.id == urlVideo.creator){
        await UrlVideo.findByIdAndUpdate(id,{sharedStatus:"not shared"});
    }
    else{
        res.redirect(routes.home)
    }
    res.redirect(routes.videoDetail(id));
    }catch(error){
        console.log(error)
        res.redirect(routes.home)
    }
}