'use client';
import {
  DeviceIcon,
  FullscreenIcon,
  HeartIcon,
  HeartIconSolid,
  LyricsIcon,
  MinimizeIcon,
  NextSongIcon,
  NowPlayingIcon,
  PauseIcon,
  PlayIcon,
  PreviousSongIcon,
  QueueIcon,
  ShuffleIcon,
  VolumeIcon,
} from '@/components/Icons';
import ThreeStateButton from '@/components/button/ThreeStateButton';
import TwoStateButton from '@/components/button/TwoStateButton';
import Slider from '@ui/slider';
import VolumeSlider from '@ui/volume';

import Image from 'next/image';
import React, { useState } from 'react';

function BottomPlayer() {
  const [clicked, setClicked] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <div className='grid-in-now-playing-bar flex flex-col w-full z-[6]'>
      <footer className='flex flex-col h-auto min-w-[620px]'>
        {/* player */}
        <div className='h-[72px] bg-black flex flex-row items-center justify-between'>
          {/* like section */}
          <div className='flex flex-row items-center justify-start relative mx-2 w-[30%] p-0'>
            <div>
              <Image
                className='rounded-sm mb-1'
                alt='song cover'
                width={56}
                height={56}
                src={
                  'https://i.scdn.co/image/ab67616d0000485113b3e37318a0c247b550bccd'
                }
              />
            </div>
            <div className='flex flex-col mx-4  cursor-pointer'>
              <span className='text-sm font-sptitle text-white'>
                Photograph
              </span>
              <span className='text-xs  translate-y-[0.5px] font-sptitle text-[#a7a7a7]'>
                Ed Sheeran
              </span>
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
                  className='hover:scale-105 hover:fill-[#1ed760] fill-[#1ed760]'
                  width={16}
                  height={16}
                />
              )}
            </button>
          </div>
          {/* playerdiv */}
          <div className='w-[40%] max-w-[722px] -translate-x-2'>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex flex-row flex-nowrap w-full gap-4 mb-2'>
                <div className='flex flex-row justify-end flex-1 gap-2 size-[32px]'>
                  <TwoStateButton Icon={ShuffleIcon} />
                  <button className='group flex size-[32px] justify-center items-center cursor-pointer relative'>
                    <PreviousSongIcon
                      className='hoverscaleicon fill-[#a7a7a7] '
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
                <button
                  onClick={() => {
                    setPlay(!play);
                  }}
                  className='bg-white rounded-[32px] flex size-[32px] justify-center items-center cursor-pointer relative hover:scale-105'
                >
                  {play === false ? (
                    <PlayIcon className='fill-black ' width={16} height={16} />
                  ) : (
                    <PauseIcon className='fill-black ' width={16} height={16} />
                  )}
                </button>
                <div className='flex flex-row justify-start flex-1 gap-2 size-[32px] '>
                  <button className='group flex size-[32px] justify-center items-center cursor-pointer relative '>
                    <NextSongIcon
                      className='hoverscaleicon fill-[#a7a7a7]'
                      width={16}
                      height={16}
                    />
                  </button>
                  <ThreeStateButton />
                </div>
              </div>
              {/* slider */}
              <Slider />
            </div>
          </div>
          <div className='min-w-[180px] w-[30%] flex flex-row justify-end '>
            <div className='flex flex-grow justify-end items-center'>
              <TwoStateButton Icon={NowPlayingIcon} />
              <TwoStateButton Icon={LyricsIcon} />
              <TwoStateButton Icon={QueueIcon} />
              <TwoStateButton Icon={DeviceIcon} />
              <div className='mr-2 space-x-2 relative items-center flex flex-shrink w-[125px]'>
                <TwoStateButton className='translate-x-1' Icon={VolumeIcon} />
                <VolumeSlider />
              </div>
              <TwoStateButton Icon={MinimizeIcon} />
              <TwoStateButton Icon={FullscreenIcon} />
            </div>
          </div>
        </div>
        {/* devices */}
        <div className='hidden bg-[#1ed760] rounded h-6 py-1 relative pe-[73.5px]'></div>
      </footer>
    </div>
  );
}

export default BottomPlayer;
