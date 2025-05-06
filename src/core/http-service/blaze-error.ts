import { ErrorResponse } from "./http-service";

export class BlazeError extends Error {
  data: Partial<ErrorResponse> = {};

  constructor({
    status,
    title,
    traceId,
    type,
    message
  }: Partial<ErrorResponse>) {
    super(message);
    this.data.type = type;
    this.data.traceId = traceId;
    this.data.title = title;
    this.data.status = status;
  }
}
