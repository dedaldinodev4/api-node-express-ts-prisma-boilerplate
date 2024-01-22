
import { FindByIdUserUseCase } from "./FindByIdUserUseCase";
import { 
  InMemoryUserRepository 
} from "../../../repositories/implementations/in-memory"
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { IUser } from "../../../dtos/User";
import { createUserMock } from "../../../mocks";


describe("Find an user usecase", () => {

  let inMemoryUserRepository: InMemoryUserRepository;
  let findByIdUserUseCase: FindByIdUserUseCase;
  let createUserUseCase: CreateUserUseCase;

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    findByIdUserUseCase = new FindByIdUserUseCase(inMemoryUserRepository)
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
  })

  it("Should be able to find Id user", async () => {
    
    const result = await createUserUseCase.execute(createUserMock)
    const id = (result as IUser).id

    await expect(findByIdUserUseCase.execute(id)
    ).resolves
    .not
    .toThrow()
  })

});
