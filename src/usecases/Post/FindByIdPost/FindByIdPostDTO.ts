
export interface IPost {
  id: string;
  title: string;
  content: string | null;
  authorId: string | null;
  published: boolean;
  created_at: Date;
  updated_at: Date;
}