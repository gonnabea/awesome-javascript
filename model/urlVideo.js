import mongoose from "mongoose";

const urlVidSchema = new mongoose.Schema({
    url: String,
    title: String,
    description: String,
    createdAt: {
        type:Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    sharedStatus: {
        type: String,
        default:"not shared"
    },
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

const model = mongoose.model("UrlVideo", urlVidSchema);

export default model;