import routes from "../routes";
import express from "express";
import { home,   forum, calculator } from "../controller/controller";


const globalRouter = express.Router();


globalRouter.get(routes.home, home);

globalRouter.get(routes.forum, forum)
globalRouter.get(routes.calculator, calculator)

export default globalRouter;