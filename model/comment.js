import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    embeddedVideo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "embeddedVideo"
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    },
    urlVideo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UrlVideo"
    },
    contents: String,
    createdAt: {
        type: Date,
        default : Date.now
    }
})

const model = mongoose.model("Comment", commentSchema);

export default model;
