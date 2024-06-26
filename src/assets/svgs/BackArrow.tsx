import React from 'react';

const BackArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role='img'
    aria-label='Back'
    xmlns='http://www.w3.org/2000/svg'
    width='17.34'
    height='12.298'
    viewBox='0 0 17.34 12.298'
  >
    <title>Back</title>
    <desc>Icon depicting a backward arrow</desc>
    <path
      id='Icon_ionic-ios-arrow-back'
      data-name='Icon ionic-ios-arrow-back'
      d='M389.66,441.452l5.489-6.149,1.492,1.332-3.408,3.818H407v2H393.234l3.407,3.816-1.492,1.332Z'
      transform='translate(-389.66 -435.303)'
      fill='currentColor'
    />
  </svg>
);

export default BackArrowIcon;
