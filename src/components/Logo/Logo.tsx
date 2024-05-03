import React, { useEffect, useState } from 'react'
import DivLoader from './DivLoader';
import { LogoImg } from './LogoImg';
import IconComponent from '../Icons/Icons';
import "./logo.css"

interface LogoProps {
    title: string;
    imageUrl: string;
    width?:number
}

export const Logo: React.FC<LogoProps> = ({title, imageUrl,width}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const image = new Image();
      image.src = imageUrl;
  
      image.onload = () => {
        setLoading(false);
      };
  
      image.onerror = () => {
        setLoading(false);
      };
  
      return () => {
        // Cleanup if component unmounts before image load completes
        image.onload = null;
        image.onerror = null;
      };
    }, [imageUrl]);
        return (
            <div className="logo-wrapper" title={title}>
      {loading ? (
        <DivLoader />
      ) : imageUrl ? (
        <div className="profile">
          <LogoImg
            src={imageUrl}
            width={width}
            alt={title}
            addClass="object-contain"
          />
        </div>
      ) : (
        <DivLoader />
      )}
      {!loading && !imageUrl && (
        <div className="profile">
          <IconComponent name='logoProfile'/>
        </div>
      )}
    </div>
        );
}