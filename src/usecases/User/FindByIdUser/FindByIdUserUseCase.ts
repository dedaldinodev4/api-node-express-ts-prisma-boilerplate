import { IUserRepository } from "../../../repositories";
import { IUser } from "./FindByIdUserDTO";


export class FindByIdUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(id: string): Promise<IUser | Error> {

    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User does not exists.");
    }
    return user;
  }
}