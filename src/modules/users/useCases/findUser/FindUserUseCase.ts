import { prisma } from "../../../../prisma/client";
import { FindUserDTO } from "../../dtos/FindUserDTO";

export class FindUserUseCase {
   
    async execute({nick}:FindUserDTO){
       const findUser = await prisma.usuarios.findMany({
            where: {
                nick
            }
        });
       
        return findUser;
    }
}