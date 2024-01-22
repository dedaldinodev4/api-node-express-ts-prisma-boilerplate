import { Request, Response } from 'express'
import { DeleteUserUseCase } from './DeleteUserUseCase'


export class DeleteUserController {
  constructor(
    private deleteUserUseCase: DeleteUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const data = await this.deleteUserUseCase.execute(id);

      return response.status(204).end();
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}