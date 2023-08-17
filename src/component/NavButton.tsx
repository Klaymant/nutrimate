import { ReactNode } from "react";

const getActiveClasses = (active: boolean) => active ? 'bg-cornflower-blue border-cornflower-blue text-white' : 'bg-gray-300 text-black';

const NavButton = ({ children, active, onClick }: NavButtonProps) => (
  <button
    type="button"
    className={`font-semibold ${getActiveClasses(active)} p-2 m-1 mx-2 outline-none rounded-xl`}
    onClick={onClick}
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
