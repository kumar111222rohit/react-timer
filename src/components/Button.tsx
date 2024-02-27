import React from 'react';
import './buttons.css';

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className = '' }) => {
  return <button className={`button ${className}`}>{text}</button>;
};

export default Button;
