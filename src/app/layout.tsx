import type { Metadata } from 'next';
import '@/styles/globals.css';
import clsx from 'clsx';
import { CIRCULAR_SP, CIRCULAR_SP_TITLE } from '@/config/next.fonts';
import NavBar from '@/components/Containers/LeftSideBar';
import BottomPlayer from '@/components/Containers/BottomPlayer';

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Spotify Clone using Next.js',
  icons: '/logo.png',
};

const fontClasses = clsx(CIRCULAR_SP.variable, CIRCULAR_SP_TITLE.variable);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={fontClasses}>
      <body>
        <main className='h-full w-full relative isolate z-0'>
          <div className=' bg-black relative h-full w-full min-h-full grid grid-areas-layout grid-cols-layout grid-rows-layout gap-2 p-2'>
            {/* Left Side Bar */}
            <div className='flex flex-col  grid-in-left-sidebar w-[420px] min-h-0 relative z-[4]'>
              {/* side-bar */}
              <NavBar />

              {/* resize-sidebar */}

              <div></div>
            </div>
            {/* Bottom Player  */}
            <BottomPlayer />
            {/* Main */}
            <div className=' grid-in-main-view row-span-2 flex flex-col bg-brand-100 relative overflow-hidden w-full rounded-lg '>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
