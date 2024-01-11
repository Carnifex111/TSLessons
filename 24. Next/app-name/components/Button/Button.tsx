import React from "react";
import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="btn">{children}</button>;
};

export default Button;
