import SpotifyLogo from '@/components/Icons/SpotifyLogo';

export default function Home() {
  return (
    <div className='min-h-screen text-white bg-brand-100 flex flex-col items-center justify-center'>
      <SpotifyLogo width={300} height={96} fill='#1ed760' />
    </div>
  );
}
