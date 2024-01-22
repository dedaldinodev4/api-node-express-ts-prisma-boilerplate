
export interface ICreatePost extends ICreatePostRequest {
  id: string;
  published: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ICreatePostRequest {
  title: string;
  content: string | null;
  authorId: string | null;
}