import { z } from "zod";


const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
      invalid_type_error: 'your name type is invalid !',
    }),
    email: z.string({
      required_error: 'email is required',
      invalid_type_error: 'your email type is invalid !',
    }),
    password: z.string({
      required_error: 'password is required',
      invalid_type_error: 'your password type is invalid !',
    }).min(6, {
      message: 'Password must be at least 6 characters long',
    }),
  }),
});





const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is  required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const authValidations = {
  userValidationSchema,
  loginValidationSchema
}