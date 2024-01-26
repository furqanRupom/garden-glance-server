import httpStatus from "http-status";
import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserModel } from "./auth.model";
import { authServices } from "./auth.service";


const createUser = catchAsync(async(req,res) => {
  const payload = req.body;
  const result = await authServices.createUserIntoDB(payload);
  sendResponse(res,{
    statusCode:201,
    success:true,
    message:"User Registered Successfully",
    data:result
  })
})

const userLogin = catchAsync(async(req,res)=> {
  const payload = req.body;
   const result = await authServices.loginUser(payload);
   const { refreshToken }  = result;
   res.cookie('refreshToken', refreshToken, {
     secure: config.node_env === 'production',
     httpOnly: true,
   });
   sendResponse(res, {
     success: true,
     statusCode: httpStatus.OK,
     message: 'User Login  successfully !',
     data: result,
   });
})


export const authController = {
  createUser,
  userLogin
}