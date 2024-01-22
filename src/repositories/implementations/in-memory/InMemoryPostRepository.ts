import { v4 as uuid } from 'uuid'

import { IPost, IPostRequest } from "../../../dtos/Post";
import { IPostRepository } from "../../IPostRepository";
import { IResultPaginated } from "../../../dtos/Pagination";
import { resultPaginated } from "../../../helpers/pagination";



export class InMemoryPostRepository implements IPostRepository {
  posts: IPost[] = [];

  async create(data: IPostRequest): Promise<Error | IPost> {
   
    this.posts.push({
      ...data,
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date(),
      published: false
    })

    return this.posts[this.posts.length - 1];
  }

  async update(id: string, data: IPostRequest): Promise<Error | IPost> {
    this.posts.filter((obj) => obj.id === id)
      .map((item) => {
        item.content = data.content,
        item.title = data.title
      });

    return this.posts.filter((obj) => obj.id === id)[0]
  }

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    return await resultPaginated(this.posts, page, perPage);
  }

  async findById(id: string): Promise<IPost | null> {
    const post = this.posts.filter((obj) => obj.id === id)[0]
    return post ?? null
  }

  async publish(id: string): Promise<IPost> {
    this.posts.filter((obj) => obj.id === id)
      .map((item) => {
        item.published = true
      });

    return this.posts.filter((obj) => obj.id === id)[0]
  }

  async delete(id: string): Promise<void> {
    this.posts = this.posts.filter((obj) => obj.id !== id)
  }

}