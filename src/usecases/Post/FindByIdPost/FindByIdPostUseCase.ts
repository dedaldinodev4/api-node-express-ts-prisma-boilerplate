import { IPostRepository } from "../../../repositories";
import { IPost } from "./FindByIdPostDTO";


export class FindByIdPostUseCase {
  constructor(
    private postRepository: IPostRepository
  ) { }

  async execute(id: string): Promise<IPost | Error> {

    const post = await this.postRepository.findById(id);
    if (!post) {
      throw new Error("Post does not exists.");
    }
    return post;
  }
}