import React, { useRef, useEffect } from 'react';

import { voiceCommandManager } from '../../utils/VoiceCommandManager';
import { LoaderSVG } from '../LoaderSVG/LoaderSVG';

import './button.css';

export interface ButtonProps {
  text?: string;
  addClass?: string;
  btntype: 'submit' | 'button';
  disabled?: boolean;
  onClick?: any;
  showIcon?: boolean;
  onKeyDown?: any;
  iconPlaceholder?: any;
  ariaLive?: 'polite' | 'assertive';
  ariaexpanded?: boolean;
  showLoading?: boolean;
  children?: any;
  customButton?: boolean;
  showLabel?: boolean;
  navigationValue?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  btnId?: any;
  btnCatogery?: 'button' | 'toggle' | 'accordion';
  status?: boolean;
  btnName?: any;
  btnValue?: any;
  btnTitle?: any;
  btnStyle?: any;
  btnKey?: any;
}

const Button = ({
  text,
  addClass,
  btntype,
  disabled,
  onClick,
  onKeyDown,
  showIcon,
  iconPlaceholder,
  ariaLive,
  children,
  customButton = false,
  showLabel = true,
  showLoading = false,
  navigationValue,
  ariaLabel,
  ariaLabelledby,
  btnId,
  btnCatogery = 'button',
  btnName,
  status = false,
  btnValue,
  btnTitle,
  btnStyle,
  btnKey,
}: ButtonProps) => {
  const ButtonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const commands = [
      `${btnCatogery === 'button' ? 'click' : ''} ${
        navigationValue?.toLowerCase() || text?.toLowerCase()
      }`,
      `${btnCatogery === 'button' ? 'submit' : ''} ${
        navigationValue?.toLowerCase() || text?.toLowerCase()
      }`,
      `${status ? 'show' : 'hide'} ${
        navigationValue?.toLowerCase() || text?.toLowerCase()
      }`,
      `${status ? 'open' : 'close'} ${
        navigationValue?.toLowerCase() || text?.toLowerCase()
      }`,
    ];
    commands.forEach((command) => {
      voiceCommandManager.addCommand(command, handleButtonClick);
    });

    // Cleanup function (remove commands) when the component unmounts or dependencies change
    return () => {
      // Cleanup when the component unmounts
      commands.forEach((command) => {
        voiceCommandManager.removeCommand(command);
      });
    };
  }, [text, status, btnCatogery, navigationValue, voiceCommandManager]);

  const handleButtonClick = () => {
    if (ButtonRef.current && btnCatogery === 'button') {
      ButtonRef.current.click();
    }

    if (ButtonRef.current && btnCatogery === 'toggle' && (!status || status)) {
      ButtonRef.current.click();
    }
  };

  const classNamesArray = [customButton ? '' : 'btn', addClass];

  const classNames = classNamesArray
    .filter((className) => className !== '')
    .join(' ');

  return (
    <>
      {btntype === 'button' && (
        <button
          style={btnStyle}
          ref={ButtonRef}
          title={btnTitle}
          key={btnKey}
          value={btnValue}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          id={btnId}
          data-btncatogery={btnCatogery}
          onClick={() => {
            if (!showLoading && onClick) {
              onClick();
            }
          }}
          type='button'
          name={btnName}
          className={classNames}
          onKeyDown={onKeyDown}
          disabled={disabled}
          // aria-expanded={ariaexpanded}
          data-navigationvalue={
            navigationValue?.toLowerCase() || text?.toLowerCase()
          }
        >
          <span className={showLoading ? 'pr-4' : 'pr-0'}>
            {showLoading && <LoaderSVG />}
          </span>
          {showIcon && iconPlaceholder}
          {children}
          {showLabel && text}
        </button>
      )}
      {btntype === 'submit' && (
        <button
          ref={ButtonRef}
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
          type='submit'
          className={`${classNames} ${
            showLoading && 'pointer-events-none cursor-not-allowed'
          }`}
          onKeyDown={onKeyDown}
          disabled={disabled}
          aria-live={ariaLive}
          data-navigationValue={
            navigationValue?.toLowerCase() || text?.toLowerCase()
          }
        >
          <span className={showLoading ? 'pr-4' : 'pr-0'}>
            {showLoading && <LoaderSVG />}
          </span>
          {showIcon && <span>{iconPlaceholder}</span>}
          {showLabel && text}
          {children}
        </button>
      )}
    </>
  );
};

export default React.memo(Button);
