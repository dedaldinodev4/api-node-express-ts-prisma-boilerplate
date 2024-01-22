import { IBase } from "./Base";

export interface IPost extends IBase, IPostRequest {
  published: boolean;
}

export interface IPostRequest {
  title: string;
  content: string | null;
  authorId: string | null;
}