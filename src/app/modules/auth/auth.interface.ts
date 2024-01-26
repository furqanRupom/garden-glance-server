import { Model } from "mongoose";

export interface IUser {
  name:string;
  email:string;
  password:string;
  role:string;
}


export interface ILoginUser {
  id: string;
  password: string;
}

export interface IUserModel extends Model<IUser> {
  isUsersExitsByEmail(email: string): Promise<IUser>;

  isPasswordMatched(
    userPassword: string,
    hashedPassword: string,
  ): Promise<Boolean>;
}