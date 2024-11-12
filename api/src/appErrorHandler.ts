import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import AppError from './AppError';

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  console.error(error);

  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      errorMessage: error.message
    });
  } else if (error instanceof ZodError) {
    res.status(400).json({
      errorMessage: 'Validation error',
      validationErrors: error.errors
    });
  } else {
    res.status(500).json({
      errorMessage: 'Internal server error'
    });
  }
};
