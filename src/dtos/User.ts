import { IBase } from "./Base";

export interface IUser extends IBase, IUserRequest {}

export interface IUserRequest {
  email: string | null;
  name: string | null;
}