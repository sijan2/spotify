import HeartIcon from '@/components/Icons/HeartIcon';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

function BottomPlayer() {
  return (
    <div className='grid-in-now-playing-bar flex flex-col w-full z-[6]'>
      <footer className='flex flex-col h-auto min-w-[620px]'>
        {/* player */}
        <div className='h-[72px] bg-black flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center justify-start relative mx-2'>
            <div>
              <Image
                className='rounded-t-sm mb-1'
                alt='song cover'
                width={56}
                height={56}
                src={
                  'https://i.scdn.co/image/ab67616d0000485113b3e37318a0c247b550bccd'
                }
              />
            </div>
            <div className='flex flex-col mx-4 font-sptitle cursor-pointer'>
              <span className='text-sm text-white'>Photograph</span>
              <span className='text-xs text-[#a7a7a7]'>Ed Sheeran</span>
            </div>
            <button className='group cursor-pointer'>
              <HeartIcon
                className='hoverscaleicon fill-[#a7a7a7] '
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className='p-1'></div>
          <div className='p-1'></div>
        </div>
        {/* devices */}
        <div className='hidden bg-[#1ed760] rounded h-7 py-1 relative pe-[73.5px]'></div>
      </footer>
    </div>
  );
}

export default BottomPlayer;
