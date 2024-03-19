import React from "react";

interface ButtonProps {
  type: string;
  message: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  submit?: boolean;
}

export const Button = ({ type, message, onClick, submit }: ButtonProps) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={type}
      onClick={onClick}
    >
      {message}
    </button>
  );
};
