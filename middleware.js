import routes from "./routes"
import multer from "multer";

export const localsMiddlewares = (req,res,next) => {
    res.locals.routes = routes;
    res.locals.user = req.user;
    
    next();
}

const upload = multer({ dest: "uploads/videos/"})

export const multerUpload = upload.single("videoFile");