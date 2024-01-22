import { IPostRepository } from "../../../repositories";
import { IPost, IUpdatePostRequest } from "./UpdatePostDTO";


export class UpdatePostUseCase {

  constructor(
    private postRepository: IPostRepository
  ) { }

  async execute(id: string, data: IUpdatePostRequest): Promise<IPost | Error> {
    const postExists = await this.postRepository.findById(id);

    if (!postExists) {
      throw new Error('Post does not exists.')
    }
    const result = await this.postRepository.update(id, data);

    return result;
  }
}