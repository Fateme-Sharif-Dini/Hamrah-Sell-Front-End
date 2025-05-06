import { IMAGE_CDN_URL } from "@/configs/global";

export const profileImageGenerator = (
  src?: string | null | undefined
): string => {
  return !!src ? IMAGE_CDN_URL + src : "";
};
