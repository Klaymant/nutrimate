import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const getActiveClasses = (active: boolean) => active ? 'bg-primary border-primary text-white' : 'bg-gray-300 text-black';

const NavButton = ({ children, path }: NavButtonProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  return (
    <li>
      <Link
        to={path}
        className={`font-semibold ${getActiveClasses(isActive)} p-1.5 mr-2 rounded-md`}
      >
        {children}
      </Link>
    </li>
  );
};

type NavButtonProps = {
  children: ReactNode;
  path: string;
};

export default NavButton;
