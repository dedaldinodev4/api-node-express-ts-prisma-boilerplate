import { IPostRepository } from "../../../repositories";


export class DeletePostUseCase {

  constructor(
    private postRepository: IPostRepository
  ) { }

  async execute(id: string): Promise<void | Error> {
    const postExists = await this.postRepository.findById(id);

    if (!postExists) {
      throw new Error('Post does not exists.');
    }

    const result = await this.postRepository.delete(id);
    return result;
  }
}