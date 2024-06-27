import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import IconComponent from '../Icons/Icons';
import { TrustLogo } from '../Avatar/TrustLogo';

export interface LogoProps {
  title?: string;
  imageUrl?: string;
  link?: string;
  action?: () => void;
  state?: any;
}

export const Logo: React.FC<LogoProps> = ({
  title,
  imageUrl,
  link,
  action,
  state,
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
      <Link
        className='logo_helpguide'
        aria-label='product logo'
        to={link || '#'}
        state={state}
        onClick={action}
      >
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
                width={200}
                alt={title}
                addClass='object-contain'
              />
            </div>
          )
        ) : (
          <div className='profile'>
            <IconComponent name='brandLogo' />
          </div>
        )}
      </Link>
    </div>
  );
};
