import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma'
import { UpdateUserController } from './UpdateUserController'
import { UpdateUserUseCase } from './UpdateUserUseCase'


export const updateUserFactory = () => {
  const prismaUserRepository = new PrismaUserRepository();
  const updateUserUseCase = new UpdateUserUseCase(prismaUserRepository)
  const updateUserController = new UpdateUserController(updateUserUseCase)

  return updateUserController
}