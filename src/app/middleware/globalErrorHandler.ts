import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { handleZodError } from '../errors/handleZodError';
import { handleValidationError } from '../errors/handleValidationError';
import { handleCastError } from '../errors/handleCastError';
import { handleDuplicateError } from '../errors/handleDuplicateError';
import PasswordError from '../errors/PasswordError';

/* create global error handler */

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let success: boolean = false;
  let message: string = error?.message || 'Something went wrong!';
  let errorMessage: string = error?.errorMessage || 'Something went wrong';
  let errorDetails = null;
  let stack: unknown = null;
  if (error instanceof ZodError) {
    const cleanError = handleZodError(error);
    message = cleanError.message;
    errorMessage = cleanError.errorMessage;
    errorDetails = cleanError.errorDetails;
    stack = cleanError?.stack;
  } else if (error?.name === 'ValidationError') {
    const cleanError = handleValidationError(error);
    message = cleanError.message;
    errorMessage = cleanError.errorMessage;
    errorDetails = cleanError.errorDetails;
    stack = cleanError?.stack;
  } else if (error?.name === 'CastError') {
    const cleanError = handleCastError(error);
    message = cleanError.message;
    errorMessage = cleanError.errorMessage;
    errorDetails = cleanError.errorDetails;
    stack = cleanError?.stack;
  } else if (error?.code === 11000) {
    const cleanError = handleDuplicateError(error);
    message = cleanError.message;
    errorMessage = cleanError.errorMessage;
    errorDetails = cleanError.errorDetails;
    stack = cleanError?.stack;
  }
  else if (error instanceof PasswordError) {
    return res.status(400).json({
      statusCode: 400,
      success,
      message,
      data:null
    });
  }

  return res.status(400).json({
    statusCode: 400,
    success,
    message,
    errorMessage,
    errorDetails,
    stack,
  });
};
export default globalErrorHandler;
