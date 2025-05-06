import Papa, { parse } from "papaparse";

export type CSVErrors = {
  type: ""; // A generalization of the error
  code: ""; // Standardized error code
  message: ""; // Human-readable details
  row: 0; // Row index of parsed data where error is
};

export type CSVMeta = {
  delimiter: string; // Delimiter used
  linebreak: string; // Line break sequence used
  aborted: string; // Whether process was aborted
  fields: string[]; // Array of field names
  truncated: string; // Whether preview consumed all input
  renamedHeaders: string; // Headers that are automatically renamed by the library to avoid duplication. {Column 1_1: 'Column 1' // the later header 'Column 1' was renamed to 'Column 1_1'}
};

type CSVResponse = {
  data: Record<string, string>[]; // array of parsed data
  errors: CSVErrors; // array of errors
  meta: CSVMeta; // object with extra info
};

const configPapaParse: Omit<
  Papa.ParseLocalConfig<Record<string, string>, File>,
  "complete"
> = {
  header: true,
  skipEmptyLines: "greedy",
  fastMode: true
};

const validateHeaders = (
  headers: string[],
  expectedHeaders: string[]
): boolean => {
  return expectedHeaders.every((header) => headers.includes(header));
};

export const parseCSV = (
  file: File,
  expectedHeaders: string[]
): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    parse(file, {
      ...configPapaParse,
      complete: (results: CSVResponse) => {
        const headers = results.meta.fields;
        if (validateHeaders(headers, expectedHeaders)) {
          resolve(results.data);
        } else {
          reject(new Error("Invalid file structure"));
        }
      },
      error: (error: unknown) => {
        reject(error);
      }
    });
  });
};
