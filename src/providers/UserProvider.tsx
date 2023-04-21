import { createContext, useContext } from "react";
import { ActivityLevel, Gender, PhysicalGoal } from "../types/generic";
import { useContextState } from "../hook/UseContextState";
import { State } from "../types/State";

const UserDataContext = createContext({} as UserDataContextValues);

export const UserDataProvider = ({ children }: Props) => {
  const weight = useContextState(0);
  const height = useContextState(0);
  const physicalGoal = useContextState<PhysicalGoal>('weight maintenance');
  const gender = useContextState<Gender>('female');
  const age = useContextState(0);
  const activityLevel = useContextState<ActivityLevel>('mid');
  const caloriesAmount = useContextState(0);
  const proteinsAmount = useContextState(0);
  const fatAmount = useContextState(0);
  const carbsAmount = useContextState(0);

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
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);

  if (!context) {
    throw new Error('useUserData must be used within UserDataProvider');
  }

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
};
