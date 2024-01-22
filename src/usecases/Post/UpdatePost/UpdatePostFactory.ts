import {
  PrismaPostRepository
} from '../../../repositories/implementations/prisma'
import { UpdatePostController } from './UpdatePostController'
import { UpdatePostUseCase } from './UpdatePostUseCase'


export const updatePostFactory = () => {
  const prismaPostRepository = new PrismaPostRepository();
  const updatePostUseCase = new UpdatePostUseCase(prismaPostRepository)
  const updatePostController = new UpdatePostController(updatePostUseCase)

  return updatePostController
}