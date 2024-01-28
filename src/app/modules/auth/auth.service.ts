import httpStatus from "http-status"
import AppError from '../../errors/AppError';
import { IUser } from './auth.interface';
import { UserModel } from './auth.model';
import { createToken } from "./auth.utils";
import config from "../../config";


/* register user */



const createUserIntoDB = async (payload:IUser) => {
  const result = await UserModel.create(payload);
  return result;
}



/* login user */

const loginUser = async (payload:{email:string,password:string}) => {
  const {email,password} = payload
  const  user = await UserModel.isUsersExitsByEmail(email)

  if(!user){
    throw new AppError(httpStatus.NOT_FOUND,'User not found','')
  }
  const hashedPassword = user.password;
  const matchedPassword = await UserModel.isPasswordMatched(password,hashedPassword)
  if (!matchedPassword) {
    throw new AppError(httpStatus.NOT_FOUND, 'Password not matched', '');
  }
  const jwtPayload = {
    email:user.email,
    role:user.role
  }
  const accessToken = createToken(jwtPayload,config.secret_token as string,config.token_expires_in)
  const refreshToken = createToken(jwtPayload,config.refresh_token as string,config.refresh_expires_in)



  return {
    accessToken,
    refreshToken
  }
}



const getUserFromDB = async (email:string) => {
  const result = await UserModel.findOne({email});
  return result;
};



export const authServices = {
  createUserIntoDB,
  loginUser,
  getUserFromDB
}