import { CreateUserUseCase } from "./CreateUserUseCase";
import { 
  InMemoryUserRepository 
} from "../../../repositories/implementations/in-memory"
import { createUserMock } from "../../../mocks/";

describe("Create User usecase", () => {

  let inMemoryUserRepository: InMemoryUserRepository;
  let createUserUseCase: CreateUserUseCase;

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
  })

  it("Should be able to create a new user ", async () => {
    
    await expect(createUserUseCase.execute(createUserMock))
    .resolves
    .not
    .toThrow()

    expect(inMemoryUserRepository.users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'root.company@gmail.com'
        })
      ])
    )
  })

});