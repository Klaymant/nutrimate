import { RouteProps } from "react-router-dom";
import Bmi from "./page/Bmi";
import Macros from "./page/Macros";
import { Home } from "./page/Home";

export const ROUTE_PATHS = {
    BMI: '/bmi',
    MACROS: '/macros',
    HOME: '/',
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
        element: <Home />,
    },
];
