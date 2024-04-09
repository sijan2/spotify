'use client';
import { cn } from '@/lib/utils';
import { FC, SVGProps, useState } from 'react';

interface TwoStateButtonProps {
  Icon: FC<SVGProps<SVGSVGElement>>;
  className?: string;
}

const TwoStateButton: FC<TwoStateButtonProps> = ({ Icon, className }) => {
  const [currentState, setCurrentState] = useState(true);

  const handleClick = () => {
    setCurrentState(!currentState);
  };
  return (
    <button
      onClick={handleClick}
      className={cn(
        className,
        'group flex size-[32px] justify-center items-center cursor-pointer relative'
      )}
    >
      {currentState ? (
        <Icon
          className='hoverscaleicon fill-[#a7a7a7] '
          width={16}
          height={16}
        />
      ) : (
        <Icon
          className='hover:scale-105 fill-[#1db954] '
          width={16}
          height={16}
        />
      )}
    </button>
  );
};

export default TwoStateButton;
