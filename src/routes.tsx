import { Navigate, RouteProps } from "react-router-dom";
import Bmi from "./page/Bmi";
import Macros from "./page/Macros";

export const ROUTE_PATHS = {
    BMI: '/bmi',
    MACROS: '/macros',
};

export const routes: RouteProps[] = [
    {
        path: ROUTE_PATHS.BMI,
        element: <Bmi />,
    },
    {
        path: ROUTE_PATHS.MACROS,
        element: <Macros />,
    },
    {
        path: '/',
        element: <Navigate replace to={ROUTE_PATHS.BMI} />,
    },
];
