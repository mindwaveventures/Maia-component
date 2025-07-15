import React, { useState } from "react";
import "./avatar.css";

interface TrustLogoProps {
  alt?: string;
  src?: string;
  addClass?: string;
  width?: number;
  height?: number;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

export const TrustLogo: React.FC<TrustLogoProps> = ({
  alt,
  width,
  height,
  src,
  addClass,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const defaultAriaLabel = ariaLabel || alt || "Trust logo image";

  return (
    <div className="img-logo-wrapper" role="img" aria-label={defaultAriaLabel}>
      {isLoading && (
        <div className="sr-only" aria-live="polite">
          Loading trust logo
        </div>
      )}
      {hasError && (
        <div className="sr-only" aria-live="polite">
          Failed to load trust logo
        </div>
      )}
      <img
        className={addClass}
        width={width}
        height={height}
        src={src}
        alt={alt || ""}
        aria-describedby={ariaDescribedby}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};
