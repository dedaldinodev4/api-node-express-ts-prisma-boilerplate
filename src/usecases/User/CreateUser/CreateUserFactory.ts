import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'


export const createUserFactory = () => {
  const prismaUserRepository = new PrismaUserRepository();
  const createUserUseCase = new CreateUserUseCase(prismaUserRepository)
  const createUserController = new CreateUserController(createUserUseCase)

  return createUserController
}