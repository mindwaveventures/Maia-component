import React, { useState, useEffect } from "react";

import { TrustLogo } from "./TrustLogo";
import IconComponent from "../Icons/Icons";
import "./avatar.css";

export interface AvatarProps {
  title: string;
  imageUrl: string;
  width?: number;
  isInteractive?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  title,
  imageUrl,
  width = 80,
  isInteractive = false,
  onClick,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
}) => {
  const [svgContent, setSvgContent] = useState("");
  const [isSvg, setIsSvg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Default aria-label if not provided
  const defaultAriaLabel = ariaLabel || `${title} avatar`;

  useEffect(() => {
    const fetchSvg = async () => {
      if (imageUrl && imageUrl.endsWith(".svg")) {
        setIsLoading(true);
        setHasError(false);

        try {
          const response = await fetch(imageUrl);

          if (!response.ok) {
            throw new Error(`Failed to fetch SVG: ${response.status}`);
          }

          const svgText = await response.text();

          // validation to check if the response is an SVG
          const parser = new DOMParser();
          const doc = parser.parseFromString(svgText, "image/svg+xml");
          const isValid = doc.getElementsByTagName("parsererror").length === 0;

          if (isValid) {
            setIsSvg(true);
            setSvgContent(svgText);
          } else {
            setIsSvg(false);
            setHasError(true);
          }
        } catch (error) {
          console.error("Error fetching SVG:", error);
          setIsSvg(false);
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsSvg(false);
        setHasError(false);
      }
    };

    fetchSvg();
  }, [imageUrl]);

  // Handle keyboard interaction for interactive avatars
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isInteractive && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick?.();
    }
  };

  const avatarContent = (
    <>
      {imageUrl && !hasError ? (
        isSvg ? (
          <div
            className="profile"
            dangerouslySetInnerHTML={{ __html: svgContent }}
            aria-hidden="true"
            role="img"
            aria-label={title}
          />
        ) : (
          <div className="profile">
            <TrustLogo
              src={imageUrl}
              width={width}
              alt={title}
              addClass="object-contain"
            />
          </div>
        )
      ) : (
        <div
          className="profile"
          role="img"
          aria-label={`${title} profile icon`}
        >
          <IconComponent name="profileIcon" aria-hidden="true" />
        </div>
      )}
      {isLoading && (
        <div className="sr-only" aria-live="polite">
          Loading avatar image
        </div>
      )}
      {hasError && (
        <div className="sr-only" aria-live="polite">
          Failed to load avatar image
        </div>
      )}
    </>
  );

  const commonProps = {
    className: "logo-wrapper",
    "aria-label": defaultAriaLabel,
    "aria-describedby": ariaDescribedby,
    role: isInteractive ? "button" : "img",
    tabIndex: isInteractive ? 0 : undefined,
    onClick: isInteractive ? onClick : undefined,
    onKeyDown: isInteractive ? handleKeyDown : undefined,
  };

  return <div {...commonProps}>{avatarContent}</div>;
};
