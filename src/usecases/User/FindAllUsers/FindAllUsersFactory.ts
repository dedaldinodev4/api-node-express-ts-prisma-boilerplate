import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma'
import { FindAllUsersController } from './FindAllUsersController'
import { FindAllUsersUseCase } from './FindAllUsersUseCase'


export const findAllUsersFactory = () => {
  const prismaUserRepository = new PrismaUserRepository();
  const findAllUsersUseCase = new FindAllUsersUseCase(prismaUserRepository)
  const findAllUsersController = new FindAllUsersController(findAllUsersUseCase)

  return findAllUsersController
}