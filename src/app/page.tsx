import NavBar from '@/components/Containers/NavBar';

export default function Home() {
  return (
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
        <div className='grid-in-now-playing-bar flex flex-col w-full z-[6]'>
          <footer className='flex flex-col h-auto min-w-[620px]'>
            {/* player */}
            <div className='h-[72px] bg-black items-center justify-center'></div>
            {/* devices */}
            <div className='bg-[#1ed760] rounded h-7 py-1 relative pe-[73.5px]'></div>
          </footer>
        </div>
        {/* Main */}
        <div className=' grid-in-main-view row-span-2 flex flex-col bg-brand-100 relative overflow-hidden w-full rounded-lg '></div>
      </div>
    </main>
  );
}
