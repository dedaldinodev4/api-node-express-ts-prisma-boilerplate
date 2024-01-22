import { IUserRepository } from "../../../repositories";
import { IResultPaginated } from "./FindAllUsersDTO";


export class FindAllUsersUseCase {
  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(page: number, perPage: number): Promise<IResultPaginated> {

    const result = await this.userRepository.findAll(page, perPage);
    return result;
  }
}