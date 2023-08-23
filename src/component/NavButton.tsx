import { ReactNode } from "react";

const getActiveClasses = (active: boolean) => active ? 'bg-primary border-primary text-white' : 'bg-gray-300 text-black';

const NavButton = ({ children, active, onClick }: NavButtonProps) => (
  <button
    type="button"
    className={`font-semibold ${getActiveClasses(active)} p-2 m-1 mx-2 rounded-xl`}
    onClick={onClick}
    tabIndex={0}
  >
    {children}
  </button>
);

type NavButtonProps = {
  children: ReactNode;
  active: boolean;
  onClick?: () => void;
};

export default NavButton;
