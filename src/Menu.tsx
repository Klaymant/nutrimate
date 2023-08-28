import { useLocation, useNavigate } from "react-router";
import NavButton from "./component/NavButton";
import { ROUTE_PATHS } from "./routes";

export const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <>
            <NavButton onClick={() => navigate(ROUTE_PATHS.BMI)} active={location.pathname === ROUTE_PATHS.BMI}>BMI</NavButton>
            <NavButton onClick={() => navigate(ROUTE_PATHS.MACROS)} active={location.pathname === ROUTE_PATHS.MACROS}>Macros</NavButton>
        </>
    );
};