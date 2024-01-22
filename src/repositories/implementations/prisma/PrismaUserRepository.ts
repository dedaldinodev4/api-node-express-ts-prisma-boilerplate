import { IUserRequest, IUser, IResultPaginated } from "../../../dtos";
import { IUserRepository } from "../../IUserRepository";

import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";


export class PrismaUserRepository implements IUserRepository {

  private repository = prismaClient.user;

  async create(data: IUserRequest): Promise<IUser | Error> {
    const user = await this.repository.create({
      data
    });
    return user;
  }

  async update(id: string, data: IUserRequest): Promise<IUser | Error> {
    const user = await this.repository.update({
      data,
      where: { id }
    });
    return user;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({
      where: { id }
    });
  }

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const users = await this.repository.findMany({
      include: { 
        posts: true 
      }
    });
    const result = await resultPaginated(users, page, perPage)
    return  result;
  }

  async findById(id: string): Promise<IUser | null> {
    const user = await this.repository.findFirst({
      where: { id }
    })
    return user ?? null;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.repository.findFirst({
      where: { email }
    })
    return user ?? null;
  }

}