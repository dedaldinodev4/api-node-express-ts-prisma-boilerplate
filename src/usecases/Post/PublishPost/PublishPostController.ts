import { Request, Response } from 'express'
import { PublishPostUseCase } from './PublishPostUseCase'


export class PublishPostController {
  constructor(
    private publishPostUseCase: PublishPostUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const data = await this.publishPostUseCase.execute(id)
      return response.status(201).json(data);

    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}