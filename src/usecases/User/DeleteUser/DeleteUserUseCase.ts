import { IUserRepository } from "../../../repositories";


export class DeleteUserUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(id: string): Promise<void | Error> {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error('User does not exists.');
    }

    const result = await this.userRepository.delete(id);
    return result;
  }
}