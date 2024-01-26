import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
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


export const authController = {
  createUser
}