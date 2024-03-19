import React from "react";

// Définition des props attendues pour FeatureItem
interface FeatureItemProps {
  source: string;
  title: string;
  message: string;
  alt: string;
}

// Composant fonctionnel FeatureItem
export const FeatureItem = ({
  source,
  title,
  message,
  alt,
}: FeatureItemProps) => {
  return (
    <div className="feature-item">
      {/* Image représentant la fonctionnalité */}
      <img src={source} alt={alt} className="feature-icon" />
      {/* Titre de la fonctionnalité */}
      <h3 className="feature-item-title">{title}</h3>
      {/* Description de la fonctionnalité */}
      <p>{message}</p>
    </div>
  );
};
