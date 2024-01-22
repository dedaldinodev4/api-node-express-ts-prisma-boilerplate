
import { 
  InMemoryPostRepository, InMemoryUserRepository 
} from "../../../repositories/implementations/in-memory"
import { CreatePostUseCase } from "../CreatePost/CreatePostUseCase";
import { DeletePostUseCase } from "./DeletePostUseCase";
import { IPost } from "../../../dtos";
import { createPostMock } from "../../../mocks";


describe("Delete Post usecase", () => {
  let inMemoryPostRepository: InMemoryPostRepository;
  let inMemoryUserRepository: InMemoryUserRepository;
  let createPostUseCase: CreatePostUseCase;
  let deletePostUseCase: DeletePostUseCase;

  beforeEach(() => {
    inMemoryPostRepository = new InMemoryPostRepository();
    createPostUseCase = new CreatePostUseCase(
      inMemoryPostRepository, inMemoryUserRepository
    );
    deletePostUseCase = new DeletePostUseCase(inMemoryPostRepository);
  });

  it("Should be able delete a Post", async () => {

    const result = await createPostUseCase.execute(createPostMock)

    expect(inMemoryPostRepository.posts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Nodejs'
        })
      ])
    )

    const id = (result as IPost).id

    await expect(deletePostUseCase.execute(id)).resolves.not.toThrow()

    expect(inMemoryPostRepository.posts).toEqual(
      expect.not
      .arrayContaining([
        expect.objectContaining({
          title: 'Nodejs'
        })
      ])
    )
  })


}) 