type ErrorThrower = (code: number, message: string, errors: string) => string;

declare global {
  namespace Express {
    export interface Response {
      throw: ErrorThrower
    }
  }
}