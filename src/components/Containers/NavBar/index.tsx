import React from 'react';
import style from './index.module.css';
import Link from 'next/link';
import {
  HomeIconSolid,
  LibraryIconSolid,
  PlusIcon,
  RightArrowIcon,
  SearchIconOutline,
} from '@Icons/Ui';

function NavBar() {
  return (
    <nav className={style.container}>
      {/* home and search */}
      <div className={style.home}>
        <ul className={style.ul}>
          <li className={style.li}>
            <Link className={style.link} href={'/home'}>
              <HomeIconSolid width={24} height={24} fill='#fff' />
              <span className={style.span}>Home</span>
            </Link>
          </li>
          <li className={style.li}>
            <Link className={style.link} href={'/search'}>
              <SearchIconOutline width={24} height={24} fill='#b3b3b3' />
              <span className={style.span}>Search</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* Library */}
      <div className='w-full flex flex-1 flex-col bg-brand-100 h-full rounded-lg'>
        <div>
          {/* Button */}
          <header className='gap-2 flex flex-col px-4 py-2'>
            <div className='flex flex-row items-center gap-2 '>
              <div className='gap-1 flex items-center me-auto min-w-0'>
                <button className={style.link2}>
                  <span className={style.span}>
                    <LibraryIconSolid width={24} height={24} fill='#a7a7a7' />
                  </span>
                  Your Library
                </button>
              </div>
              <span className='block'>
                <button className='p-2'>
                  <PlusIcon width={16} height={16} fill='#fff' />
                </button>
              </span>
              <button className='p-2'>
                <RightArrowIcon width={16} height={16} fill='#fff' />
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
