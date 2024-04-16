import React, { useState } from 'react';
import './tooltip.css';
interface TooltipProps {
  delay?: number;
  direction?: string;
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
export const Tooltip: React.FC<TooltipProps> = (props) => {
  let hoverTimeout: NodeJS.Timeout;
  let focusTimeout: NodeJS.Timeout;
  const [active, setActive] = useState(false);
  const showTip = () => {
    clearTimeout(focusTimeout);
    hoverTimeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };
  const hideTip = () => {
    clearTimeout(hoverTimeout);
    setActive(false);
  };
  const handleFocus = () => {
    clearTimeout(hoverTimeout);
    focusTimeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };
  const handleBlur = () => {
    clearTimeout(focusTimeout);
    setActive(false);
  };
  return (
    <div
      className={`Tooltip-Wrapper ${props.className || ''}`}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || 'top'}`}>
          {props.content}
        </div>
      )}
    </div>
  );
};
Tooltip.defaultProps = {
  delay: 400,
  direction: 'top',
};

