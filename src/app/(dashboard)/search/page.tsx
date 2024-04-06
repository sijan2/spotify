import SpotifyLogo from '@/components/Icons/SpotifyLogo';

import React from 'react';

function Search() {
  return (
    <div className='min-h-screen text-white bg-brand-100 flex flex-col items-center justify-center'>
      <SpotifyLogo width={300} height={96} fill='#bb2' />
    </div>
  );
}

export default Search;
