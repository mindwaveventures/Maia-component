import React from 'react';

export const BurgerMenu: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role='button'
    xmlns='http://www.w3.org/2000/svg'
    width='40'
    height='32'
    viewBox='0 0 40 32'
  >
    <title>Application menu</title>
    <path
      id='Path_16'
      data-name='Path 16'
      d='M163.5,100.8a2.5,2.5,0,0,1,0,5h-35a2.5,2.5,0,0,1,0-5Zm0,13.5a2.5,2.5,0,0,1,0,5h-35a2.5,2.5,0,0,1,0-5Zm0,13.5a2.5,2.5,0,0,1,0,5h-35a2.5,2.5,0,0,1,0-5Z'
      transform='translate(-126 -100.8)'
    />
  </svg>
);
