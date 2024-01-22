
import { FindByIdPostUseCase } from "./FindByIdPostUseCase";
import { 
  InMemoryPostRepository, InMemoryUserRepository 
} from "../../../repositories/implementations/in-memory"
import { CreatePostUseCase } from "../CreatePost/CreatePostUseCase";
import { IPost } from "../../../dtos/Post";
import { createPostMock } from "../../../mocks";


describe("Find an Post usecase", () => {

  let inMemoryPostRepository: InMemoryPostRepository;
  let inMemoryUserRepository: InMemoryUserRepository;
  let findByIdPostUseCase: FindByIdPostUseCase;
  let createPostUseCase: CreatePostUseCase;

  beforeAll(() => {
    inMemoryPostRepository = new InMemoryPostRepository();
    findByIdPostUseCase = new FindByIdPostUseCase(inMemoryPostRepository)
    createPostUseCase = new CreatePostUseCase(
      inMemoryPostRepository, inMemoryUserRepository
    )
  })

  it("Should be able to find Id Post", async () => {
    
    const result = await createPostUseCase.execute(createPostMock)
    const id = (result as IPost).id

    await expect(findByIdPostUseCase.execute(id)
    ).resolves
    .not
    .toThrow()
  })

});
