import {
  PrismaPostRepository
} from '../../../repositories/implementations/prisma'
import { DeletePostController } from './DeletePostController'
import { DeletePostUseCase } from './DeletePostUseCase'


export const deletePostFactory = () => {
  const prismaPostRepository = new PrismaPostRepository();
  const deletePostUseCase = new DeletePostUseCase(prismaPostRepository)
  const deletePostController = new DeletePostController(deletePostUseCase)

  return deletePostController
}