import React, { SVGProps } from 'react';

function PinIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-encore-id='icon'
      role='img'
      aria-hidden='true'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      fill='#1ed760'
    >
      <title>Pinned</title>
      <path d='M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z'></path>
    </svg>
  );
}

export default PinIcon;
