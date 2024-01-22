import { Request, Response, NextFunction } from "express";

export const ErrorInternal = (err: Error, 
  request: Request, 
  response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err}`,
    });
  }