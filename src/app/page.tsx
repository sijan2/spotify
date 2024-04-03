export default function Home() {
  return (
    <div className='h-full w-full relative'>
      <div className=' bg-black relative h-full w-full min-h-full grid grid-areas-layout grid-cols-layout grid-rows-layout gap-2 p-2'>
        {/* Left Side Bar */}
        <div className='bg-brand-100 grid-in-left-sidebar h-auto rounded-lg w-[349px] min-h-0 flex flex-col relative z-[4]'>
          01
        </div>
        {/* Bottom Player  */}
        <div className='grid-in-now-playing-bar flex flex-col w-full z-[6]'>
          <footer className='flex flex-col h-auto min-w-[620px]'>
            {/* player */}
            <div className='h-[72px] bg-black'></div>
            {/* devices */}
            <div className='bg-[#1ed760] rounded h-6'></div>
          </footer>
        </div>
        {/* Main */}
        <div className=' grid-in-main-view row-span-2 flex flex-col bg-brand-100 relative overflow-hidden w-full rounded-lg '>
          02
        </div>
      </div>
    </div>
  );
}
