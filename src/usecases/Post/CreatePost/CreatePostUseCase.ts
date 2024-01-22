import { IPostRepository, IUserRepository } from "../../../repositories";
import { ICreatePost, ICreatePostRequest } from "./CreatePostDTO";


export class CreatePostUseCase {

  constructor(
    private postRepository: IPostRepository,
    private userRepository: IUserRepository,
  ) { }

  async execute(data: ICreatePostRequest): Promise<ICreatePost | Error> {
    
    if (data.authorId) {
      const userExists = await this.userRepository.findById(data.authorId);

      if (!userExists) {
        throw new Error(`Author does not exists.`);
      }
    }
    const result = await this.postRepository.create(data);
    return result;
  }
}