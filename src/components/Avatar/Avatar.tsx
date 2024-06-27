import React, { useState, useEffect } from 'react';

import { TrustLogo } from './TrustLogo';
import IconComponent from '../Icons/Icons';

export interface AvatarProps {
  title: string;
  imageUrl: string;
  width?: number;
}

export const Avatar: React.FC<AvatarProps> = ({
  title,
  imageUrl,
  width = 80,
}) => {
  const [svgContent, setSvgContent] = useState('');
  const [isSvg, setIsSvg] = useState(false);

  useEffect(() => {
    const fetchSvg = async () => {
      if (imageUrl && imageUrl.endsWith('.svg')) {
        try {
          const response = await fetch(imageUrl);
          const svgText = await response.text();

          // validation to check if the response is an SVG
          const parser = new DOMParser();
          const doc = parser.parseFromString(svgText, 'image/svg+xml');
          const isValid = doc.getElementsByTagName('parsererror').length === 0;

          if (isValid) {
            setIsSvg(true);
            setSvgContent(svgText);
          } else {
            setIsSvg(false);
          }
        } catch (error) {
          console.error('Error fetching SVG:', error);
          setIsSvg(false);
        }
      } else {
        setIsSvg(false);
      }
    };

    fetchSvg();
  }, [imageUrl]);

  return (
    <div className='logo-wrapper' title={title}>
      {imageUrl ? (
        isSvg ? (
          <div
            className='profile'
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <div className='profile'>
            <TrustLogo
              src={imageUrl}
              width={width}
              alt={title}
              addClass='object-contain'
            />
          </div>
        )
      ) : (
        <div className='profile'>
          <IconComponent name='profileIcon' />
        </div>
      )}
    </div>
  );
};
