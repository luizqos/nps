import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController{
    async handle(req: Request, res: Response){
        const { nick } = req.body;
        const findUserUseCase = new FindUserUseCase();
        const result = await findUserUseCase.execute(nick);
        return res.status(200).json(result);
    }
}