
export interface IPost extends IUpdatePostRequest {
  id: string;
  published: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface IUpdatePostRequest {
  title: string;
  content: string | null;
  authorId: string | null;
}