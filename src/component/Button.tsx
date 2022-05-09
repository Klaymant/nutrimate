import { ReactNode } from "react";

type ButtonType = 'button' | 'submit';

type ButtonProps = {
  children: ReactNode;
  type?: ButtonType;
  onClick?: () => void;
};

const Button = ({ children, type = "button", onClick }: ButtonProps) => (
  <button type={type} onClick={onClick} className="bg-mint-green rounded p-2 hover:bg-opacity-80">
    {children}
  </button>
);

export default Button;
