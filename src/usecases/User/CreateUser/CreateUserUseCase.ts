import { IUserRepository } from "../../../repositories";
import { ICreateUser, ICreateUserRequest } from "./CreateUserDTO";


export class CreateUserUseCase {

  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(data: ICreateUserRequest): Promise<ICreateUser | Error> {
    
    if (data.email) {
      const userExists = await this.userRepository.findByEmail(data.email);
      if (userExists) {
        throw new Error("User already exists.");
      }
    }

    const result = await this.userRepository.create(data);
    return result;
  }
}