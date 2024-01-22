import {
  PrismaPostRepository,
  PrismaUserRepository
} from '../../../repositories/implementations/prisma'
import { CreatePostController } from './CreatePostController'
import { CreatePostUseCase } from './CreatePostUseCase'


export const createPostFactory = () => {
  const prismaPostRepository = new PrismaPostRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const createPostUseCase = new CreatePostUseCase(
    prismaPostRepository, prismaUserRepository
  )
  const createPostController = new CreatePostController(createPostUseCase)

  return createPostController
}