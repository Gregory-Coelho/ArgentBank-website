import React from "react";

interface FeatureItemProps {
  source: string;
  title: string;
  message: string;
  alt: string;
}

export const FeatureItem = ({
  source,
  title,
  message,
  alt,
}: FeatureItemProps) => {
  return (
    <div className="feature-item">
      <img src={source} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{message}</p>
    </div>
  );
};
