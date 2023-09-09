import { createContext, useContext } from "react";
import { ActivityLevel, Gender, PhysicalGoal } from "../types/generic";
import { useContextState } from "../hook/UseContextState";
import { State } from "../types/State";
import { FormulaCalculator } from "../services/CalculationUtil";
import { Macros, MacrosData } from "../types/UserData";
import { UserDataStorageManager } from "../services/DataStorageManager";
import { UserDataManager } from "../services/UserDataManager";

const UserDataContext = createContext<UserDataContextValues | null>(null);

export const UserDataProvider = ({ children }: Props) => {
  const savedUserData = UserDataStorageManager.retrieve();
  const weight = useContextState(savedUserData?.weight || 0);
  const height = useContextState(savedUserData?.height || 0);
  const physicalGoal = useContextState<PhysicalGoal>(savedUserData?.physicalGoal || 'weight maintenance');
  const gender = useContextState<Gender>(savedUserData?.gender || 'female');
  const age = useContextState(savedUserData?.age || 0);
  const activityLevel = useContextState<ActivityLevel>(savedUserData?.activityLevel || '0');
  const caloriesAmount = useContextState(savedUserData?.caloriesAmount || 0);
  const proteinsAmount = useContextState(savedUserData?.proteinsAmount || 0);
  const fatAmount = useContextState(savedUserData?.fatAmount || 0);
  const carbsAmount = useContextState(savedUserData?.carbsAmount || 0);
  const bmi = useContextState(savedUserData?.bmi || 0);

  const updateStoredUserData = () => {
    UserDataStorageManager.update({
      weight: weight.value,
      height: height.value,
      physicalGoal: physicalGoal.value,
      gender: gender.value,
      age: age.value,
      activityLevel: UserDataManager.getActivityLevelLabel(activityLevel.value),
    });
  };

  const updateMacros = (formulaCalculator: FormulaCalculator) => {
    const userData: MacrosData = {
      gender: gender.value,
      height: height.value,
      weight: weight.value,
      age: age.value,
      activityLevel: UserDataManager.getActivityLevelLabel(activityLevel.value),
      physicalGoal: physicalGoal.value,
    };
    const newCaloriesAmount = formulaCalculator.calculateCalories(userData);
    const newProteinsAmount = formulaCalculator.calculateProteins(userData);
    const newFatAmount = formulaCalculator.calculateFat(weight.value);

    caloriesAmount.setValue(newCaloriesAmount);
    proteinsAmount.setValue(newProteinsAmount);
    fatAmount.setValue(newFatAmount);

    const macrosData: Pick<Macros, 'caloriesAmount' | 'proteinsAmount' | 'fatAmount'> = {
      caloriesAmount: newCaloriesAmount,
      proteinsAmount: newProteinsAmount,
      fatAmount: newFatAmount,
    };

    carbsAmount.setValue(formulaCalculator.calculateCarbs(macrosData));
    updateStoredUserData();
  };

  const updateBmi = (formulaCalculator: FormulaCalculator) => {
    const newBmi = formulaCalculator.calculateBmi(weight.value, height.value);

    bmi.setValue(newBmi);
    updateStoredUserData();
  };

  return (
    <UserDataContext.Provider
      value={{
        weight,
        height,
        physicalGoal,
        gender,
        age,
        activityLevel,
        caloriesAmount,
        proteinsAmount,
        fatAmount,
        carbsAmount,
        bmi,
        updateBmi,
        updateMacros,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);

  if (!context)
    throw new Error('useUserData must be used within UserDataProvider');

  return context;
}

type Props = {
  children: React.ReactNode;
};

type UserDataContextValues = {
  weight: State<number>;
  height: State<number>;
  physicalGoal: State<PhysicalGoal>;
  gender: State<Gender>;
  age: State<number>;
  activityLevel: State<ActivityLevel>;
  caloriesAmount: State<number>;
  proteinsAmount: State<number>;
  fatAmount: State<number>;
  carbsAmount: State<number>;
  bmi: State<number>;
  updateBmi: (formulaCalculator: FormulaCalculator) => void;
  updateMacros: (formulaCalculator: FormulaCalculator) => void;
};
