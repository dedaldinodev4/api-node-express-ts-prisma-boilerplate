
import { 
  InMemoryUserRepository 
} from "../../../repositories/implementations/in-memory"
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { IUser } from "../../../dtos";
import { createUserMock } from "../../../mocks";


describe("Delete User usecase", () => {
  let inMemoryUserRepository: InMemoryUserRepository;
  let createUserUseCase: CreateUserUseCase;
  let deleteUserUseCase: DeleteUserUseCase;

  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
    deleteUserUseCase = new DeleteUserUseCase(inMemoryUserRepository);
  });

  it("Should be able delete a User", async () => {

    const result = await createUserUseCase.execute(createUserMock)

    expect(inMemoryUserRepository.users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'root.company@gmail.com'
        })
      ])
    )

    const id = (result as IUser).id

    await expect(deleteUserUseCase.execute(id)).resolves.not.toThrow()

    expect(inMemoryUserRepository.users).toEqual(
      expect.not
      .arrayContaining([
        expect.objectContaining({
          email: 'root.company@gmail.com'
        })
      ])
    )
  })


}) 