import NavButton from "./component/NavButton";
import { ROUTE_PATHS } from "./routes";

export const Menu = () => (
	<>
		<ul>
			<NavButton path={ROUTE_PATHS.HOME}>Home</NavButton>
			<NavButton path={ROUTE_PATHS.BMI}>BMI</NavButton>
			<NavButton path={ROUTE_PATHS.MACROS}>Macros</NavButton>
		</ul>
	</>
);
