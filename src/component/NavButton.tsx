import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const getActiveClasses = (active: boolean) => active ? 'text-white' : 'text-black';

const NavButton = ({ children, path }: NavButtonProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  return (
    <li>
      <Link
        to={path}
        className={`${getActiveClasses(isActive)}`}
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
