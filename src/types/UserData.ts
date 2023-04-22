import { ActivityLevel, Gender, PhysicalGoal } from "./generic";

export type UserData = {
  gender: Gender;
  height: number;
  weight: number;
  age: number;
  activityLevel: ActivityLevel;
  physicalGoal: PhysicalGoal;
  bmi: number;
} & Macros;

export type Macros = {
  caloriesAmount: number;
  proteinsAmount: number;
  fatAmount: number;
  carbsAmount: number;
};

export type MacrosData = Pick<UserData, 'gender' | 'height' | 'weight' | 'age' | 'activityLevel' | 'physicalGoal'>;