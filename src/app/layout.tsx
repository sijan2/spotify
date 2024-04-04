import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Spotify Clone using Next.js',
  icons: '/logo.png',
};

const circular = localFont({
  src: [
    {
      path: '../../public/fonts/CircularSp-Book.woff2',
      weight: '400',
    },
  ],
  display: 'swap',
  variable: '--font-sptitle',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${circular.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
