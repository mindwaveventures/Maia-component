import React, { useEffect, useRef } from "react";

interface LazyBackgroundImageProps {
  imageUrl?: string;
  altText?: string;
  children?: any;
}

const LazyBackgroundImage: React.FC<LazyBackgroundImageProps> = ({
  imageUrl,
  altText,
  children,
}) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load the background image
          imageRef.current!.style.backgroundImage = `url(${imageUrl})`;
          observer.unobserve(imageRef.current!);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [imageUrl]);

  return (
    <div
      ref={imageRef}
      className="bg-center bg-cover"
      style={{
        backgroundImage: "none", // Initially set to none, will be updated when in view
      }}
    >
      <div className="hidden">
        <img
          src={imageUrl}
          alt={altText || "Background image with healthcare design pattern"}
          loading="lazy" // Enable native lazy loading for the img tag
        />
      </div>
      {children}
    </div>
  );
};

export default LazyBackgroundImage;
