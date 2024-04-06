'use client';
import React from 'react';
import style from './index.module.css';
import Link from 'next/link';
import {
  HomeIconOutline,
  HomeIconSolid,
  LibraryIconSolid,
  PlusIcon,
  RightArrowIcon,
  SearchIconOutline,
  SearchIconSolid,
} from '@/components/Icons';
import { usePathname } from 'next/navigation';

function NavBar() {
  const path = usePathname();
  return (
    <nav className={style.container}>
      {/* home and search */}
      <div className={style.home}>
        <ul className={style.ul}>
          <li className={style.li}>
            <Link className={style.link} href={'/'}>
              {path === '/' ? (
                <>
                  <HomeIconSolid width={24} height={24} fill='#fff' />
                  <span className={`text-white ${style.span}`}>Home</span>
                </>
              ) : (
                <>
                  <HomeIconOutline
                    className='hovericon fill-[#b3b3b3]'
                    width={24}
                    height={24}
                  />
                  <span className={style.span}>Home</span>
                </>
              )}
            </Link>
          </li>
          <li className={style.li}>
            <Link className={`${style.link} group`} href={'/search'}>
              {path === '/search' ? (
                <>
                  <SearchIconSolid width={24} height={24} fill='#fff' />
                  <span className={`text-white ${style.span}`}>Search</span>
                </>
              ) : (
                <>
                  <SearchIconOutline
                    className='hovericon'
                    width={24}
                    height={24}
                    fill='#b3b3b3'
                  />
                  <span className={style.span}>Search</span>
                </>
              )}
            </Link>
          </li>
        </ul>
      </div>
      {/* Library */}
      <div className='w-full flex flex-1 flex-col bg-brand-100 h-full rounded-lg'>
        <div>
          {/* Button */}
          <header className='gap-2 flex flex-col px-4 py-2'>
            <div className='flex flex-row items-center gap-2'>
              <div className='gap-1 flex items-center me-auto min-w-0'>
                <button className={`${style.link2} group`}>
                  <span className={style.span}>
                    <LibraryIconSolid
                      className='hovericon fill-[#a7a7a7]'
                      width={24}
                      height={24}
                    />
                  </span>
                  Your Library
                </button>
              </div>
              <span className='block'>
                <button className='p-2 hover:bg-brand-200 hover:rounded-full group'>
                  <PlusIcon
                    className='hovericon'
                    width={16}
                    height={16}
                    fill='#a7a7a7'
                  />
                </button>
              </span>
              <button className='p-2 hover:bg-brand-200 hover:rounded-full group'>
                <RightArrowIcon
                  className='hovericon'
                  width={16}
                  height={16}
                  fill='#a7a7a7'
                />
              </button>
            </div>
          </header>
          {/* Chips */}
          <div className='items-center flex'></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
