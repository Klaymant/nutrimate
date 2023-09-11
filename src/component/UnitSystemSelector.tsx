import { ReactNode } from "react";
import { useSettings } from "../providers/SettingsProvider";
import { UnitSystem } from "../services/CalculationUtil";

const UnitSystemSelectorElement = ({ children, label }: UnitSystemSelectorElementProps) => {
  const { unitSystem } = useSettings();
  const changeUnitSystem = (currentUnitSystem: UnitSystem) => () => {
    unitSystem.setValue(currentUnitSystem);
  };
  const isChosen = unitSystem.value === label;

  return (
    <li>
      <button
        onClick={changeUnitSystem(label)}
        className={isChosen ? 'selected' : 'unselected'}
      >
        {children}
      </button>
    </li>
  )
};

export const UnitSystemSelector = () => (
  <div>
    Unit of measure system:
    <menu>
      <UnitSystemSelectorElement label='imperial'>Imperial</UnitSystemSelectorElement>
      <UnitSystemSelectorElement label='metric'>Metric</UnitSystemSelectorElement>
    </menu>
  </div>
);


type UnitSystemSelectorElementProps = {
  children: ReactNode;
  label: UnitSystem
};
