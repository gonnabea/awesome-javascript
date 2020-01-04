import mongoose from "mongoose";

const embeddedVideoSchema = new mongoose.Schema({
    url: String,
    title: String,
    description: String,
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
    }
})

const model = mongoose.model("embeddedVideo", embeddedVideoSchema);

export default model;