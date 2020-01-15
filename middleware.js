import routes from "./routes";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: "ap-northeast-1"
})

export const localsMiddlewares = (req,res,next) => {
    res.locals.routes = routes;
    res.locals.user = req.user;
    next();
}

const upload = multer({ 
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "awesome-javascript/video"
    })
});

export const multerUpload = upload.single("videoFile");