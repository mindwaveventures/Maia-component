import React from 'react';

const RollManagementIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    className={`${className}`}
    xmlns='http://www.w3.org/2000/svg'
    height='24px'
    viewBox='0 -960 960 960'
    width='24px'
    fill='currentColor'
  >
    <path
      fill='currentColor'
      d='M600-120v-120H440v-400h-80v120H80v-320h280v120h240v-120h280v320H600v-120h-80v320h80v-120h280v320H600ZM160-760v160-160Zm520 400v160-160Zm0-400v160-160Zm0 160h120v-160H680v160Zm0 400h120v-160H680v160ZM160-600h120v-160H160v160Z'
    />
  </svg>
);
export default RollManagementIcon;
