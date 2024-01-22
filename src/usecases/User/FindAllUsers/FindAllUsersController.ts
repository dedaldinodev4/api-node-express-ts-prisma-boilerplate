import { Request, Response } from 'express'
import { FindAllUsersUseCase } from './FindAllUsersUseCase'


export class FindAllUsersController {
  constructor(
    private findAllUsersUseCase: FindAllUsersUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const page: number = parseInt(request.query.page as string)
      const perPage: number = parseInt(request.query.perPage as string)

      const data = await this.findAllUsersUseCase.execute(page, perPage)
      return response.status(200).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}