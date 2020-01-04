import globalRouter from "./router/globalRouter";
import routes from "./routes";
import express from "express";
import { localsMiddlewares } from "./middleware";
import videoRouter from "./router/videoRouter";
import bodyParser from "body-parser";
import userRouter from "./router/userRouter";

import dotenv from "dotenv"

import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import MongoStore from "connect-mongo";
import "./passport"
import mongoose from "mongoose";



const app = express();

const CokieStore = MongoStore(session)

dotenv.config()

app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({mongooseConnection: mongoose.connection})
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddlewares);

app.use("/uploads", express.static("uploads"))
app.use("/backgrounds", express.static("backgrounds"));
app.use("/sound-effects", express.static("sound-effects"));

app.use(cookieParser());


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");



app.use(routes.home, globalRouter);
app.use(routes.videoStorage, videoRouter);
app.use(routes.home, userRouter);



export default app;