import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma'
import { FindByIdUserController } from './FindByIdUserController'
import { FindByIdUserUseCase } from './FindByIdUserUseCase'


export const findByIdUserFactory = () => {
  const prismaUserRepository = new PrismaUserRepository();
  const findByIdUserUseCase = new FindByIdUserUseCase(prismaUserRepository)
  const findByIdUserController = new FindByIdUserController(findByIdUserUseCase)

  return findByIdUserController
}