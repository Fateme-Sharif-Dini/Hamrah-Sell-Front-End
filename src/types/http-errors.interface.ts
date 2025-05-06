interface Problem {
  title: string;
  status: number;
  detail?: string;
  errors?: ProblemErrors[];
}
interface ProblemErrors {
  propertyName: string;
  errorMessage: string;
  attemptedValue: string;
  customState: string;
  severity: string;
  errorCode: string;
  formattedMessagePlaceholderValues: string;
}
interface BadRequestError extends Problem {}
interface UnauthorizedError extends Problem {}
interface ValidationError extends Problem {}
interface NotFoundError extends Problem {}
interface UnhandledException extends Problem {}
interface NetworkError extends Problem {}

type ApiError =
  | BadRequestError
  | UnauthorizedError
  | ValidationError
  | NetworkError
  | NotFoundError
  | UnhandledException;

export type {
  Problem,
  ProblemErrors,
  BadRequestError,
  UnauthorizedError,
  ValidationError,
  UnhandledException,
  NotFoundError,
  NetworkError,
  ApiError
};
