import express from "express";
import routes from "../routes";
import { login, join, postJoin, postLogin, logout } from "../controller/userController";
import passport from "passport";

const userRouter = express.Router();

userRouter.get(routes.login, login);
userRouter.post(routes.login, postLogin);

userRouter.get(routes.googleLogin, passport.authenticate('google', { scope: ['profile', 'email'] }));
userRouter.get(routes.googleCallback, passport.authenticate('google', {
    failureRedirect: routes.login,
    successRedirect: routes.home
}));

userRouter.get(routes.logout, logout)

userRouter.get(routes.join, join);
userRouter.post(routes.join, postJoin)

export default userRouter;