import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserUseCase } from './DeleteUserUseCase'


export const deleteUserFactory = () => {
  const prismaUserRepository = new PrismaUserRepository();
  const deleteUserUseCase = new DeleteUserUseCase(prismaUserRepository)
  const deleteUserController = new DeleteUserController(deleteUserUseCase)

  return deleteUserController
}