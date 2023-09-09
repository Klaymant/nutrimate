import { createContext, useContext } from "react";
import { UnitSystem } from "../services/CalculationUtil";
import { State } from "../types/State";
import { useContextState } from "../hook/UseContextState";

const SettingsContext = createContext<SettingsContextValues | null>(null);

export const SettingsProvider = ({ children }: Props) => {
  const unitSystem = useContextState<UnitSystem>('metric');
  const heightUnitSystemLabel = unitSystem.value === 'metric' ? 'cm' : 'inches';
  const weightUnitSystemLabel = unitSystem.value === 'metric' ? 'kg' : 'lbs';

  return (
    <SettingsContext.Provider
      value={{
        unitSystem,
        heightUnitSystemLabel,
        weightUnitSystemLabel,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context)
    throw new Error('useSettings must be used within SettingsProvider');

  return context;
}

type Props = {
  children: React.ReactNode;
};

type SettingsContextValues = {
  unitSystem: State<UnitSystem>;
  heightUnitSystemLabel: string;
  weightUnitSystemLabel: string;
};
