import { Request, Response } from 'express'
import { DeletePostUseCase } from './DeletePostUseCase'


export class DeletePostController {
  constructor(
    private deletePostUseCase: DeletePostUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.deletePostUseCase.execute(id);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}