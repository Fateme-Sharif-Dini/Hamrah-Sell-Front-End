export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export const IMAGE_CDN_URL = process.env.NEXT_PUBLIC_IMAGE_CDN;
export const API_URL_CLB = process.env.NEXT_PUBLIC_API_URL_CLB;

export const TAPI_URL = process.env.NEXT_PUBLIC_TAPI_URL;

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const RE_CAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY;

export const PRODUCT_PAGE_SIZE = process.env.NEXT_PUBLIC_PRODUCT_PAGE_SIZE!;
export const TICKET_MESSAGES_PAGE_SIZE = +(
  process.env.NEXT_PUBLIC_TICKET_MESSAGES_PAGE_SIZE || 10
) as number;
export const SELL_GROUP_PAGE_SIZE = +(
  process.env.NEXT_PUBLIC_SELL_GROUP_PAGE_SIZE || 10
) as number;

export const NEXT_AUTH_SECRET = process.env.NEXT_PUBLIC_AUTH_SECRET;
export const MAX_FILE_SIZE = process.env.NEXT_PUBLIC_MAX_FILE_SIZE;
export const CDN_API_KEY = process.env.CDN_API_KEY;
export const CDN_API_URL = process.env.CDN_API_URL;
export const SKIP_BUILD_STATIC_GENERATION =
  process.env.SKIP_BUILD_STATIC_GENERATION;
