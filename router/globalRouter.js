import routes from "../routes";
import express from "express";
import { home,   forum, calculater } from "../controller/controller";


const globalRouter = express.Router();


globalRouter.get(routes.home, home);

globalRouter.get(routes.forum, forum)
globalRouter.get(routes.calculator, calculater)

export default globalRouter;