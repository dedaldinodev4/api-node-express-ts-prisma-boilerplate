import {
  PrismaPostRepository
} from '../../../repositories/implementations/prisma'
import { FindByIdPostController } from './FindByIdPostController'
import { FindByIdPostUseCase } from './FindByIdPostUseCase'


export const findByIdPostFactory = () => {
  const prismaPostRepository = new PrismaPostRepository();
  const findByIdPostUseCase = new FindByIdPostUseCase(prismaPostRepository)
  const findByIdPostController = new FindByIdPostController(findByIdPostUseCase)

  return findByIdPostController
}