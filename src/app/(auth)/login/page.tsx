import SpotifyLogo from '@/components/Icons/SpotifyLogo';
import Image from 'next/image';
import React from 'react';

function Login() {
  return (
    <div className='min-h-screen text-white bg-brand-100 flex flex-col items-center justify-center'>
      <SpotifyLogo width={300} height={96} fill='#1ed760' />
    </div>
  );
}

export default Login;
