import { IPostRequest, IPost, IResultPaginated } from "../../../dtos";
import { IPostRepository } from "../../IPostRepository";

import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";


export class PrismaPostRepository implements IPostRepository {

  private repository = prismaClient.post;

  async create(data: IPostRequest): Promise<IPost | Error> {
    const post = await this.repository.create({
      data
    });
    return post;
  }

  async publish(id: string): Promise<IPost> {
    const post = await this.repository.update({
      data: { published: true },
      where: { id }
    });
    return post;
  }

  async update(id: string, data: IPostRequest): Promise<IPost | Error> {
    const post = await this.repository.update({
      data,
      where: { id }
    });
    return post;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({
      where: { id }
    });
  }

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const posts = await this.repository.findMany({
      include: {
        author: true
      }
    });

    const result = await resultPaginated(posts, page, perPage);
    return result;
  }

  async findById(id: string): Promise<IPost | null> {
    const post = await this.repository.findFirst({
      where: { id }
    })
    return post ?? null;
  }

}