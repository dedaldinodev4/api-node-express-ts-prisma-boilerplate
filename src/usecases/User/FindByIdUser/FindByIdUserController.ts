import { Request, Response } from 'express'
import { FindByIdUserUseCase } from './FindByIdUserUseCase'


export class FindByIdUserController {
  constructor(
    private findByIdUserUseCase: FindByIdUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdUserUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}