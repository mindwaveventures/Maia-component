import React from 'react'
import './logo.css'

interface LogoImgProps {
    alt?: string;
    src?: string;
    addClass?: string;
    width?: number;
    height?: number;
}

export const LogoImg: React.FC<LogoImgProps> = ({alt,
    width,
    height,
    src,
    addClass,}) => {
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
}