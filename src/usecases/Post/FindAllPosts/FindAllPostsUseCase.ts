import { IPostRepository } from "../../../repositories";
import { IResultPaginated } from "./FindAllPostsDTO";


export class FindAllPostsUseCase {
  constructor(
    private postRepository: IPostRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.postRepository.findAll(page, perPage);
    return result;
  }
}