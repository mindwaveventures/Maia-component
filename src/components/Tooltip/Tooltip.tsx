import React, { useState } from "react";
import "./tooltip.css";

interface TooltipProps {
  delay?: number;
  direction?: string;
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
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

  const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={`Tooltip-Wrapper ${props.className || ""}`}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onFocus={handleFocus}
      onBlur={handleBlur}
      role="tooltip"
      aria-describedby={active ? tooltipId : undefined}
      aria-label={props["aria-label"]}
    >
      {props.children}
      {active && (
        <div
          className={`Tooltip-Tip ${props.direction || "top"}`}
          id={tooltipId}
          role="tooltip"
          aria-live="polite"
        >
          {props.content}
        </div>
      )}
    </div>
  );
};

Tooltip.defaultProps = {
  delay: 400,
  direction: "top",
};
