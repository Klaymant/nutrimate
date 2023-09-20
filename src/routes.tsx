import { RouteProps } from "react-router-dom";
import Bmi from "./page/Bmi";
import Macros from "./page/Macros";
import { Home } from "./page/Home";
import { Bmr } from "./page/Bmr";
import { PageTitle } from "./component/PageTitle";

export const ROUTE_PATHS = {
  BMI: '/bmi',
  MACROS: '/macros',
  BMR: '/bmr',
  HOME: '/',
};


export const routes: RouteProps[] = [
  {
    path: ROUTE_PATHS.BMI,
    element: (
      <>
        <PageTitle>BMI Calculator</PageTitle>
        <Bmi />
      </>
    ),
  },
  {
    path: ROUTE_PATHS.MACROS,
    element: (
      <>
        <PageTitle>Macronutrient Calculator</PageTitle>
        <Macros />
      </>
    ),
  },
  {
    path: ROUTE_PATHS.BMR,
    element: (
      <>
        <PageTitle>BMR Calculator</PageTitle>
        <Bmr />
      </>
    ),
  },
  {
    path: '/',
    element: <Home />,
  },
];
