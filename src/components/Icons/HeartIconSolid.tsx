import type { FC, SVGProps } from 'react';

const HeartIconSolid: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    data-encore-id='icon'
    role='img'
    aria-hidden='true'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z'></path>
  </svg>
);

export default HeartIconSolid;
