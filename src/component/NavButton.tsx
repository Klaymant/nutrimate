import { ReactNode } from "react";

type NavButtonProps = {
  children: ReactNode;
  active: boolean;
  onClick?: () => void;
};

const getActiveClasses = (active: boolean) => active ? 'text-cornflower-blue border-b-4 border-cornflower-blue' : 'text-black';

const NavButton = ({ children, active, onClick }: NavButtonProps) => (
  <button className={`font-semibold ${getActiveClasses(active)} outline-none p-1 m-1 mx-2 outline`} onClick={onClick}>{children}</button>
);

export default NavButton;
