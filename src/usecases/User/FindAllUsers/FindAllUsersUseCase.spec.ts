
import { FindAllUsersUseCase } from "./FindAllUsersUseCase";
import { 
  InMemoryUserRepository 
} from "../../../repositories/implementations/in-memory"
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase"
import { createUserMock } from "../../../mocks";


describe("Find all users usecase", () => {

  let inMemoryUserRepository: InMemoryUserRepository;
  let createUserUseCase: CreateUserUseCase;
  let findAllUsersUseCase: FindAllUsersUseCase;

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
    findAllUsersUseCase = new FindAllUsersUseCase(inMemoryUserRepository)
  })

  it("Should be able to find all Users", async () => {
    
    await expect(createUserUseCase.execute(
      createUserMock
    )).resolves
    .not
    .toThrow()

    expect(inMemoryUserRepository.users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'root.company@gmail.com'
        })
      ])
    )

    await expect(findAllUsersUseCase.execute(1,10)
    ).resolves
    .not
    .toThrow()
    expect(inMemoryUserRepository.users.length).toEqual(1)
  })

});