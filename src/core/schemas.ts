import {
  string,
  trim,
  length,
  startsWith,
  pipe,
  boolean,
  custom,
  email,
  minLength
} from "valibot";

// General schema for validating mobile numbers
const MobileSchema = pipe(
  string(),
  trim(),
  length(11, "شماره موبایل باید 11 رقم باشد"),
  startsWith("09", "شماره موبایل باید با 09 شروع شود")
);

const EmailSchema = pipe(string(), trim(), email("ایمیل وارد شده صحیح نیست"));

const AcceptSchema = pipe(
  boolean(),
  custom((value) => value !== false)
);

const createRequiredStringSchema = (message: string) =>
  pipe(string(), trim(), minLength(1, message));

export const Schemas = {
  Mobile: MobileSchema,
  Email: EmailSchema,
  Accept: AcceptSchema,
  createRequiredStringSchema: createRequiredStringSchema
};
