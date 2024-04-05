import localFont from 'next/font/local';

// This configures the Next.js Font for Open Sans
// We then export a variable and class name to be used
// within Tailwind (tailwind.config.ts) and Storybook (preview.js)
export const CIRCULAR_SP = localFont({
  src: [
    {
      path: '../../public/fonts/CircularSpTitle-Tall-Bold.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CircularSp-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-spcircle',
});
