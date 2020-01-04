import passport from "passport";
import User from "./model/user"
import GoogleStrategy from "passport-google-oauth20";
import dotenv from "dotenv";
import { googleLoginCallback } from "./controller/userController";
import routes from "./routes";

dotenv.config()


passport.use(User.createStrategy());
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: `http://localhost:4000${routes.googleCallback}`
},googleLoginCallback
))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

