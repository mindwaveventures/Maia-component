import React from 'react';

const DashboardIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role='img'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <title>Dashboard</title>
    <path
      d='M4.5 21C4.1 21 3.75 20.85 3.45 20.55C3.15 20.25 3 19.9 3 19.5V4.5C3 4.1 3.15 3.75 3.45 3.45C3.75 3.15 4.1 3 4.5 3H19.5C19.9 3 20.25 3.15 20.55 3.45C20.85 3.75 21 4.1 21 4.5V19.5C21 19.9 20.85 20.25 20.55 20.55C20.25 20.85 19.9 21 19.5 21H4.5ZM4.5 19.5H11.25V4.5H4.5V19.5ZM12.75 19.5H19.5V11.975H12.75V19.5ZM12.75 10.475H19.5V4.5H12.75V10.475Z'
      fill='currentColor'
    />
  </svg>
);

export default DashboardIcon;
