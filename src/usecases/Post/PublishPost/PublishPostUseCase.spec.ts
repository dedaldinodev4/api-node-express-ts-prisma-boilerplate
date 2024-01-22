
import { PublishPostUseCase } from "./PublishPostUseCase";
import { 
  InMemoryPostRepository, InMemoryUserRepository 
} from "../../../repositories/implementations/in-memory"
import { CreatePostUseCase } from "../CreatePost/CreatePostUseCase";
import { IPost } from "../../../dtos/Post";
import { createPostMock } from "../../../mocks";


describe("Publish an Post usecase", () => {

  let inMemoryPostRepository: InMemoryPostRepository;
  let inMemoryUserRepository: InMemoryUserRepository;
  let publishPostUseCase: PublishPostUseCase;
  let createPostUseCase: CreatePostUseCase;

  beforeAll(() => {
    inMemoryPostRepository = new InMemoryPostRepository();
    publishPostUseCase = new PublishPostUseCase(inMemoryPostRepository)
    createPostUseCase = new CreatePostUseCase(
      inMemoryPostRepository, inMemoryUserRepository
    )
  })

  it("Should be able to published post", async () => {
    
    const result = await createPostUseCase.execute(createPostMock)
    const id = (result as IPost).id

    await expect(publishPostUseCase.execute(id)
    ).resolves
    .not
    .toThrow()
  })

});
