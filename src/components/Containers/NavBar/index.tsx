import React from 'react';
import style from './index.module.css';
import Link from 'next/link';
import { HomeIconSolid, SearchIconOutline, SearchIconSolid } from '@Icons/Ui';

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
              <SearchIconOutline width={24} height={24} fill='#fff' />
              <span className={style.span}>Search</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* Library */}
      <div className='w-full flex flex-1 flex-col bg-brand-100 h-full rounded-lg'></div>
    </nav>
  );
}

export default NavBar;
