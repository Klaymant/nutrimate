import { ReactNode } from "react";

type NavButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const NavButton = ({ children, onClick }: NavButtonProps) => (
  <button className="border-2 border-green-500 hover:bg-green-500 p-2" onClick={onClick}>{children}</button>
);

export default NavButton;
