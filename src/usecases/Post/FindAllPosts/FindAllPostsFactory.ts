import {
  PrismaPostRepository
} from '../../../repositories/implementations/prisma'
import { FindAllPostsController } from './FindAllPostsController'
import { FindAllPostsUseCase } from './FindAllPostsUseCase'


export const findAllPostsFactory = () => {
  const prismaPostRepository = new PrismaPostRepository();
  const findAllPostsUseCase = new FindAllPostsUseCase(prismaPostRepository)
  const findAllPostsController = new FindAllPostsController(findAllPostsUseCase)

  return findAllPostsController
}