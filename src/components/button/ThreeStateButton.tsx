'use client';
import { useState } from 'react';
import { RepeatIcon, RepeatOneIcon } from '../Icons';

const ThreeStateButton = () => {
  const [currentState, setCurrentState] = useState(0);

  const handleClick = () => {
    setCurrentState((currentState + 1) % 3);
  };
  return (
    <button
      onClick={handleClick}
      className='group flex size-[32px] justify-center items-center cursor-pointer relative'
    >
      {currentState === 0 && (
        <RepeatIcon
          className='hoverscaleicon fill-[#a7a7a7] '
          width={16}
          height={16}
        />
      )}
      {currentState === 1 && (
        <RepeatIcon
          className='hover:scale-105 fill-[#1db954] '
          width={16}
          height={16}
        />
      )}
      {currentState === 2 && (
        <RepeatOneIcon
          className='hover:scale-105 fill-[#1db954] '
          width={16}
          height={16}
        />
      )}
    </button>
  );
};

export default ThreeStateButton;
