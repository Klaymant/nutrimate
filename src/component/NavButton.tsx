import { ReactNode } from "react";

type NavButtonProps = {
  children: ReactNode;
  active: boolean;
  onClick?: () => void;
};

const getActiveClasses = (active: boolean) => active ? 'border-green-500' : 'border-gray-600';

const NavButton = ({ children, active, onClick }: NavButtonProps) => (
  <button className={`border-b-4 ${getActiveClasses(active)} outline-none hover:text-green-500 p-2 m-2`} onClick={onClick}>{children}</button>
);

export default NavButton;
