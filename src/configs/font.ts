import localFont from 'next/font/local';

export const IranSans = localFont({
  src: [
    {
      path: '../../public/fonts/IRANSansXFaNum-Thin.woff2',
      weight: '300',
    },
    {
      path: '../../public/fonts/IRANSansXFaNum-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/IRANSansXFaNum-Medium.woff2',
      weight: '600',
    },
    {
      path: '../../public/fonts/IRANSansXFaNum-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-yekanbakh',
});
