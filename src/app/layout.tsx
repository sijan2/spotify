import type { Metadata } from 'next';
import '@/styles/globals.css';
import clsx from 'clsx';
import { CIRCULAR_SP } from '@/config/next.fonts';

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Spotify Clone using Next.js',
  icons: '/logo.png',
};

const fontClasses = clsx(CIRCULAR_SP.variable);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
