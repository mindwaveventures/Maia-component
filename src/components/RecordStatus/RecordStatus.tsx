import React from 'react';

import './RecordStatus.css';
import Button from '../Button/Button';
import IconComponent from '../Icons/Icons';

export interface RecordStatusProps {
  label: string;
  hide?: boolean;
  button?: string;
  btn_function?: (e: any) => void;
}

const RecordStatus: React.FC<RecordStatusProps> = ({
  label,
  hide,
  button,
  btn_function,
}) => {
  return (
    <div className='w-full rounded-lg bg-white'>
      <div className={`record-status ${hide ? 'd-none' : ''}`}>
        <IconComponent name='infoIcon' />

        <p>{label}</p>
        {button && (
          <>
            <div className='h-3' />
            <Button
              btntype='button'
              text={button}
              onClick={btn_function}
              addClass='primary-btn'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default RecordStatus;
