import React from 'react';

const BellIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role='button'
    xmlns='http://www.w3.org/2000/svg'
    width='37.117'
    height='37.117'
    viewBox='0 0 37.117 37.117'
  >
    <title>Notification</title>
    <g className='notify-icon' transform='translate(5.438 3.222)'>
      <path
        d='M19.563,34.855a3.13,3.13,0,0,0,3.121-3.121H16.442A3.12,3.12,0,0,0,19.563,34.855Zm9.363-9.363v-7.8c0-4.791-2.559-8.8-7.023-9.863V6.765a2.341,2.341,0,1,0-4.682,0V7.826C12.743,8.887,10.2,12.882,10.2,17.689v7.8L7.078,28.613v1.561H32.047V28.613Z'
        transform='translate(-7.078 -4.424)'
        fill='currentColor'
      />
    </g>
  </svg>
);

export default BellIcon;
