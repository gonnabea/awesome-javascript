import routes from "../routes";
import express from "express";
import { videoStorage, uploadVideo, postUploadVideo, postUrlVideo, postEmbedded, videoDetail, deleteVideo, shareSelector } from "../controller/videoController";
import { multerUpload } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.home, videoStorage);

videoRouter.get(routes.videoUpload, uploadVideo);
videoRouter.post(routes.videoUpload, multerUpload, postUploadVideo)

videoRouter.post(routes.urlVideo, postUrlVideo);

videoRouter.post(routes.embeddedVideo, postEmbedded);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.deleteVideo(), deleteVideo);

videoRouter.post(routes.shareSelector(), shareSelector)

export default videoRouter;