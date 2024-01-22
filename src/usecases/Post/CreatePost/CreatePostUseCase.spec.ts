import { CreatePostUseCase } from "./CreatePostUseCase";
import { 
  InMemoryPostRepository,
  InMemoryUserRepository
} from "../../../repositories/implementations/in-memory"
import { createPostMock } from "../../../mocks/";

describe("Create Post usecase", () => {

  let inMemoryPostRepository: InMemoryPostRepository;
  let inMemoryUserRepository: InMemoryUserRepository;
  let createPostUseCase: CreatePostUseCase;

  beforeAll(() => {
    inMemoryPostRepository = new InMemoryPostRepository();
    createPostUseCase = new CreatePostUseCase(
      inMemoryPostRepository,
      inMemoryUserRepository
    )
  })

  it("Should be able to create a new Post ", async () => {
    
    await expect(createPostUseCase.execute(createPostMock))
    .resolves
    .not
    .toThrow()

    expect(inMemoryPostRepository.posts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Nodejs'
        })
      ])
    )
  })

});