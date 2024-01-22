import { Request, Response } from 'express'
import { UpdatePostUseCase } from './UpdatePostUseCase'


export class UpdatePostController {
  constructor(
    private updatePostUseCase: UpdatePostUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { content, title, authorId } = request.body;

    try {
      const data = await this.updatePostUseCase.execute(id, { 
        content, title, authorId 
      });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}