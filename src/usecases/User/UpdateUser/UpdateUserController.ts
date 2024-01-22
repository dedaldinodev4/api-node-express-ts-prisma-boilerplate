import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'


export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { email, name } = request.body;

    try {
      const data = await this.updateUserUseCase.execute(id, { email, name });

      return response.status(201).json(data);
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}