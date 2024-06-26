import React from 'react';

export const Info: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role='img'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <title>Info</title>
    <path
      d='M9 4.99166H11V6.98911H9V4.99166ZM9 8.98656H11V14.9789H9V8.98656ZM10 -0.00195312C4.48 -0.00195312 0 4.47233 0 9.98528C0 15.4982 4.48 19.9725 10 19.9725C15.52 19.9725 20 15.4982 20 9.98528C20 4.47233 15.52 -0.00195312 10 -0.00195312ZM10 17.9751C5.59 17.9751 2 14.3897 2 9.98528C2 5.58091 5.59 1.99549 10 1.99549C14.41 1.99549 18 5.58091 18 9.98528C18 14.3897 14.41 17.9751 10 17.9751Z'
      fill='currentColor'
    />
  </svg>
);
