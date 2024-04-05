import localFont from 'next/font/local';

// This configures the Next.js Font for Open Sans
// We then export a variable and class name to be used
// within Tailwind (tailwind.config.ts) and Storybook (preview.js)
export const CIRCULAR_SP_TITLE = localFont({
  src: [
    {
      path: 'public/fonts/CircularSp-Bold.woff2',
    },
  ],
  variable: '--font-sptitle',
});
