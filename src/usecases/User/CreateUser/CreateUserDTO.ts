

export interface ICreateUserRequest {
  email: string | null;
  name: string | null;
}

export interface ICreateUser extends ICreateUserRequest {
  id: string;
  created_at: Date;
  updated_at: Date;
}