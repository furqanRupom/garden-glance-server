

/* register user */

import { IUser } from "./auth.interface";
import { UserModel } from "./auth.model";


const createUserIntoDB = async (payload:IUser) => {
  const result = await UserModel.create(payload);
  return result;
}





export const authServices = {
  createUserIntoDB
}