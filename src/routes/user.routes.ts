import { Router } from "express";
import { FindUserController } from "../modules/users/useCases/findUser/FindUserController";

const findUserController = new FindUserController();   
const userRoutes = Router();

userRoutes.get("/", findUserController.handle);

export { userRoutes };