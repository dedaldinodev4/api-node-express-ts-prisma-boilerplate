import { Request, Response } from 'express'
import { FindByIdPostUseCase } from './FindByIdPostUseCase'


export class FindByIdPostController {
  constructor(
    private findByIdPostUseCase: FindByIdPostUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdPostUseCase.execute(id)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}