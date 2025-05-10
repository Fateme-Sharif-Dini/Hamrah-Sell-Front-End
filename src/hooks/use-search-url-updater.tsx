import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useSearchUrlUpdater = () => {
  const currentSearchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();

  const updateUrl = (
    searchParams: Record<string, string | number | undefined>,
    options?: { scroll: boolean }
  ) => {
    const params = new URLSearchParams(currentSearchParams);
    for (const key in searchParams) {
      const value = searchParams[key];
      if (value) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    }
    push(`${pathname}?${params.toString()}`, options);
  };

  return updateUrl;
};

export default useSearchUrlUpdater;
