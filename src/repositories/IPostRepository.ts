import { IPost, IPostRequest, IResultPaginated } from "../dtos";

export interface IPostRepository {
  create(data: IPostRequest):Promise<IPost | Error>;
  publish(id: string):Promise<IPost>
  update(id: string, data: IPostRequest):Promise<IPost | Error>;
  delete(id: string):Promise<void>;
  findAll(page: number, perPage: number):Promise<IResultPaginated>;
  findById(id: string):Promise<IPost | null>
}