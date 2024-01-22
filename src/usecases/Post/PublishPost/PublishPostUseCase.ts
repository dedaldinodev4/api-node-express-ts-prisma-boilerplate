import { IPostRepository } from "../../../repositories";
import { IPost } from "./PublishPostDTO";


export class PublishPostUseCase {
  constructor(
    private postRepository: IPostRepository
  ) { }

  async execute(id: string): Promise<IPost | Error> {

    const postExists = await this.postRepository.findById(id);
    if (!postExists) {
      throw new Error("Post does not exists.");
    }
    const post = await this.postRepository.publish(id);
    return post;
  }
}