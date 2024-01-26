
import { IUser } from './auth.interface';
import { UserModel } from './auth.model';


/* register user */



const createUserIntoDB = async (payload:IUser) => {
  const result = await UserModel.create(payload);
  return result;
}





export const authServices = {
  createUserIntoDB
}