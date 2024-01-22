import {
  PrismaPostRepository
} from '../../../repositories/implementations/prisma'
import { PublishPostController } from './PublishPostController'
import { PublishPostUseCase } from './PublishPostUseCase'


export const publishPostFactory = () => {
  const prismaPostRepository = new PrismaPostRepository();
  const publishPostUseCase = new PublishPostUseCase(prismaPostRepository)
  const publishPostController = new PublishPostController(publishPostUseCase)

  return publishPostController
}