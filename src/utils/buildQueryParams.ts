type IProductSearchParams = Record<string, string>;

type QueryParamValue = string | number | boolean | null;
type QueryParamObject = {
  [key: string]: QueryParamValue | QueryParamValue[] | QueryParamObject;
};

export const remapSearchParams = (
  params: Partial<IProductSearchParams>,
  keyMap: Record<keyof Partial<IProductSearchParams>, string>
): QueryParamObject => {
  const remapped: QueryParamObject = {};

  for (const key in params) {
    const value = params[key as keyof IProductSearchParams];

    if (value !== undefined && value !== null) {
      const newKey = keyMap[key as keyof IProductSearchParams] || key;

      // اگر مقدار رشته‌ای با کاما بود، تبدیل به آرایه‌اش کن
      if (typeof value === 'string' && value.includes(',')) {
        remapped[newKey] = value.split(',');
      } else {
        remapped[newKey] = value;
      }
    }
  }

  return remapped;
};

export const buildQueryParams = (
  obj: QueryParamObject,
  prefix = ''
): string => {
  const queryParts: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const paramKey = prefix ? `${prefix}.${key}` : key;

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (typeof item === 'object' && item !== null) {
          queryParts.push(buildQueryParams(item as QueryParamObject, paramKey));
        } else {
          queryParts.push(
            `${encodeURIComponent(paramKey)}=${encodeURIComponent(String(item))}`
          );
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      queryParts.push(buildQueryParams(value as QueryParamObject, paramKey));
    } else if (value !== undefined && value !== null) {
      queryParts.push(
        `${encodeURIComponent(paramKey)}=${encodeURIComponent(String(value))}`
      );
    }
  }

  return queryParts.join('&');
};
