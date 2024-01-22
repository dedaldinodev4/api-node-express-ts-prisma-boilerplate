
import { FindAllPostsUseCase } from "./FindAllPostsUseCase";
import { 
  InMemoryPostRepository, InMemoryUserRepository 
} from "../../../repositories/implementations/in-memory"
import { CreatePostUseCase } from "../CreatePost/CreatePostUseCase"
import { createPostMock } from "../../../mocks";


describe("Find all posts usecase", () => {

  let inMemoryPostRepository: InMemoryPostRepository;
  let inMemoryUserRepository: InMemoryUserRepository;
  let createPostUseCase: CreatePostUseCase;
  let findAllPostsUseCase: FindAllPostsUseCase;

  beforeAll(() => {
    inMemoryPostRepository = new InMemoryPostRepository();
    createPostUseCase = new CreatePostUseCase(
      inMemoryPostRepository,
      inMemoryUserRepository,
    )
    findAllPostsUseCase = new FindAllPostsUseCase(inMemoryPostRepository)
  })

  it("Should be able to find all Posts", async () => {
    
    await expect(createPostUseCase.execute(
      createPostMock
    )).resolves
    .not
    .toThrow()

    expect(inMemoryPostRepository.posts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Nodejs'
        })
      ])
    )

    await expect(findAllPostsUseCase.execute(1,10)
    ).resolves
    .not
    .toThrow()
    expect(inMemoryPostRepository.posts.length).toEqual(1)
  })

});