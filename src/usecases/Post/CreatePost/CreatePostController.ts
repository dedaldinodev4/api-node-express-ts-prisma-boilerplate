import { Request, Response } from 'express'
import { CreatePostUseCase } from './CreatePostUseCase'


export class CreatePostController {
  constructor(
    private createPostUseCase: CreatePostUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, content, authorId } = request.body;

    try {
      const data = await this.createPostUseCase.execute({
        title, content, authorId
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}