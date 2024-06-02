import { Response } from "express";

export function handleErrorResponse(res: Response, error: any) {
  if (error instanceof Error && error.message) {
    return res.status(400).send(error.message);
  }
  return res.status(400).send("An error occurred");
}

export function getSeventyPrecentedValue(value: number): number {
  return value * 0.7;
}