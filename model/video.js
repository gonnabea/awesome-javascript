import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    fileUrl: {
        type: String
    },
    title: "String",
    description: "String",
    createdAt: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    uploadedBy:{
        type: String
    },
    sharedStatus: {
        type: String,
        default:"not shared"
    },
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
})

const model = mongoose.model('Video', videoSchema);

export default model;