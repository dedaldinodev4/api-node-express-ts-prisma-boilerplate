
export interface IUser extends IUpdateUserRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUpdateUserRequest {
  email: string | null;
  name: string | null;
}