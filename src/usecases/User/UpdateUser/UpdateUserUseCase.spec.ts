
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import {
  InMemoryUserRepository
} from "../../../repositories/implementations/in-memory"
import { IUser } from "../../../dtos/User";
import { createUserMock, updateUserMock } from "../../../mocks";

describe("Update User usecase", () => {

  let inMemoryUserRepository: InMemoryUserRepository;
  let createUserUseCase: CreateUserUseCase;
  let updateUserUseCase: UpdateUserUseCase;

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
    updateUserUseCase = new UpdateUserUseCase(inMemoryUserRepository)
  })

  it("Should be able to create and update an user ", async () => {

    const response = await createUserUseCase.execute(createUserMock)

    const { id } = (response as IUser);
    await expect(updateUserUseCase.execute(id, updateUserMock)
    )
      .resolves
      .not
      .toThrow()

    expect(inMemoryUserRepository.users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'root@gmail.com'
        })
      ])
    )

  })

});