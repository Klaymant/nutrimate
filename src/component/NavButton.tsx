import { ReactNode } from "react";

type NavButtonProps = {
  children: ReactNode;
  active: boolean;
  onClick?: () => void;
};

const getActiveClasses = (active: boolean) => active ? 'border-mint-green' : 'border-gray-600';

const NavButton = ({ children, active, onClick }: NavButtonProps) => (
  <button className={`rounded-xl bg-mint-green ${getActiveClasses(active)} outline-none hover:text-white p-2 m-2 outline`} onClick={onClick}>{children}</button>
);

export default NavButton;
