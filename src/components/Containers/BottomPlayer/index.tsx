'use client';
import {
  HeartIcon,
  HeartIconSolid,
  NextSongIcon,
  PlayIcon,
  PreviousSongIcon,
  RepeatIcon,
  ShuffleIcon,
} from '@/components/Icons';
import { Slider } from '@ui/slider';

import Image from 'next/image';
import React, { useState } from 'react';

function BottomPlayer() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className='grid-in-now-playing-bar flex flex-col w-full z-[6]'>
      <footer className='flex flex-col h-auto min-w-[620px]'>
        {/* player */}
        <div className='h-[72px] bg-black flex flex-row items-center justify-between'>
          {/* like section */}
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
            <button
              onClick={() => {
                setClicked(!clicked);
              }}
              className='group cursor-pointer active:animate-shake'
            >
              {clicked === false ? (
                <HeartIcon
                  className='hoverscale fill-[#a7a7a7] '
                  width={16}
                  height={16}
                />
              ) : (
                <HeartIconSolid
                  className='hover:scale-105 hover:fil-[#1ed760] fill-[#1ed760] '
                  width={16}
                  height={16}
                />
              )}
            </button>
          </div>
          {/* playerdiv */}
          <div className='w-[40%] max-w-[722px]'>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex flex-row flex-nowrap w-full gap-4 mb-2'>
                <div className='flex flex-row justify-end flex-1 gap-2 size-[32px]'>
                  <button className=' flex size-[32px] justify-center items-center cursor-pointer relative '>
                    <ShuffleIcon
                      className='hoverscale fill-[#a7a7a7]'
                      width={16}
                      height={16}
                    />
                  </button>
                  <button className=' flex size-[32px] justify-center items-center cursor-pointer relative'>
                    <PreviousSongIcon
                      className='hoverscale fill-[#a7a7a7] '
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
                <button className='bg-white rounded-[32px] flex size-[32px] justify-center items-center cursor-pointer relative hover:scale-105'>
                  <PlayIcon className='fill-black ' width={16} height={16} />
                </button>
                <div className='flex flex-row justify-start flex-1 gap-2 size-[32px] '>
                  <button className=' flex size-[32px] justify-center items-center cursor-pointer relative '>
                    <NextSongIcon
                      className='hoverscale fill-[#a7a7a7]'
                      width={16}
                      height={16}
                    />
                  </button>
                  <button className=' flex size-[32px] justify-center items-center cursor-pointer relative'>
                    <RepeatIcon
                      className='hoverscale fill-[#a7a7a7] '
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              </div>
              {/* slider */}
              <div>
                {/* <Slider defaultValue={[33]} max={100} step={1} /> */}
              </div>
            </div>
            <div className='p-1'></div>
          </div>
          <div className='min-w-[180px]'></div>
        </div>
        {/* devices */}
        <div className='hidden bg-[#1ed760] rounded h-6 py-1 relative pe-[73.5px]'></div>
      </footer>
    </div>
  );
}

export default BottomPlayer;
