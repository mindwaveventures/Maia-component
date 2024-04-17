import React from 'react';

import './loading.css';

export interface LoaderSVGProps {
  status?: boolean;
}

export const LoaderSVG: React.FC<LoaderSVGProps> = () => {
  return (
    <div>
      <svg
        className="btnSpinner"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        aria-label="Loading"
      >
        <circle
          className="path stroke-current text-btnPrimaryContent"
          id="Ellipse_1"
          data-name="Ellipse 1"
          cx="7.5"
          cy="7.5"
          r="7.5"
          transform="translate(1 1)"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

