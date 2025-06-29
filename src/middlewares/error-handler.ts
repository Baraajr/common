import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      errors: err.serializeErrors(),
    });
    return;
  }
  console.error(err);
  res.status(400).json({
    errors: [{ message: err.message || 'Something went wrong' }],
  });
};

export { errorHandler };
