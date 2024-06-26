import React from 'react';

interface TrustLogoProps {
  alt?: string;
  src?: string;
  addClass?: string;
  width?: number;
  height?: number;
}

export const TrustLogo: React.FC<TrustLogoProps> = ({
  alt,
  width,
  height,
  src,
  addClass,
}) => {
  return (
    <div className="img-logo-wrapper">
      <img
        className={addClass}
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
    </div>
  );
};
