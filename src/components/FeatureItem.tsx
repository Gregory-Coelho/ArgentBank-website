import React from "react";

interface FeatureItemProps {
  source: string;
  title: string;
  message: string;
}

export const FeatureItem = ({ source, title, message }: FeatureItemProps) => {
  return (
    <div className="feature-item">
      <img src={source} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{message}</p>
    </div>
  );
};
