
import { UpdatePostUseCase } from "./UpdatePostUseCase";
import { CreatePostUseCase } from "../CreatePost/CreatePostUseCase";
import {
  InMemoryPostRepository, InMemoryUserRepository
} from "../../../repositories/implementations/in-memory"
import { IPost } from "../../../dtos/Post";
import { createPostMock, updatePostMock } from "../../../mocks";

describe("Update Post usecase", () => {

  let inMemoryPostRepository: InMemoryPostRepository;
  let inMemoryUserRepository: InMemoryUserRepository;
  let createPostUseCase: CreatePostUseCase;
  let updatePostUseCase: UpdatePostUseCase;

  beforeAll(() => {
    inMemoryPostRepository = new InMemoryPostRepository();
    createPostUseCase = new CreatePostUseCase(
      inMemoryPostRepository, inMemoryUserRepository
    )
    updatePostUseCase = new UpdatePostUseCase(inMemoryPostRepository)
  })

  it("Should be able to create and update an Post ", async () => {

    const response = await createPostUseCase.execute(createPostMock)

    const { id } = (response as IPost);
    await expect(updatePostUseCase.execute(id, updatePostMock)
    )
      .resolves
      .not
      .toThrow()

    expect(inMemoryPostRepository.posts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'React with Nextjs 14'
        })
      ])
    )

  })

});