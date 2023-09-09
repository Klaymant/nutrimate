import { ACTIVITY_LEVEL_FACTOR, PHYSICAL_GOAL_FACTOR } from "../factors";
import { Macros, MacrosData } from "../types/UserData";

const Formulas = {
  harris(userData: MacrosData) {
    if (userData.gender === 'male')
      return 88.362 + (13.397 * userData.weight) + (4.799 * userData.height ) - (5.677 * userData.age);

    return (447.593 + (9.247 * userData.weight) + (3.098 * userData.height) - (4.330 * userData.age));
  },
};

export const FormulaCalculationConverter = (unitSystem: UnitSystem = 'metric'): FormulaCalculator => {
  const weightFactor = unitSystem === 'imperial' ? 0.45 : 1;
  const heightFactor = unitSystem === 'imperial' ? 2.54 : 1;

  return {
    calculateBmi(weight: number, height: number) {
      return BaseFormulaCalculator.calculateBmi(weight * weightFactor, height * heightFactor);
    },
    calculateCalories(userData: MacrosData) {
      return BaseFormulaCalculator.calculateCalories({
        ...userData,
        weight: userData.weight * weightFactor,
        height: userData.height * heightFactor,
      });
    },
    calculateProteins(userData: MacrosData) {
      return BaseFormulaCalculator.calculateProteins({
        ...userData,
        weight: userData.weight * weightFactor,
      });
    },
    calculateFat(weight: number) {
      return BaseFormulaCalculator.calculateFat(weight * weightFactor);
    },
    calculateCarbs(macros: Pick<Macros, 'caloriesAmount' | 'proteinsAmount' | 'fatAmount'>) {
      return BaseFormulaCalculator.calculateCarbs({
        ...macros,
        caloriesAmount: macros.caloriesAmount * weightFactor,
        proteinsAmount: macros.proteinsAmount * weightFactor,
        fatAmount: macros.fatAmount * weightFactor,
      });
    },
  };
};

export const BaseFormulaCalculator: FormulaCalculator = {
  calculateBmi(weight: number, height: number): number {
    if (weight === 0 || height === 0)
      return 0;
    
    return +(weight / (height / 100) ** 2).toFixed(1);
  },
  calculateCalories(userData: MacrosData): number {
    return Math.round(
      Formulas.harris(userData) * ACTIVITY_LEVEL_FACTOR[userData.activityLevel].calories * PHYSICAL_GOAL_FACTOR[userData.physicalGoal].calories
    );
  },
  calculateProteins(userData: MacrosData): number {
    return Math.round(
      userData.weight * ACTIVITY_LEVEL_FACTOR[userData.activityLevel].proteins * PHYSICAL_GOAL_FACTOR[userData.physicalGoal].proteins
    );
  },
  calculateFat(weight: number): number {
    return Math.round(weight * 1);
  },
  calculateCarbs(macros: Pick<Macros, 'caloriesAmount' | 'proteinsAmount' | 'fatAmount'>): number {
    return Math.round((macros.caloriesAmount - (4 * macros.proteinsAmount) - (4 * macros.fatAmount)) / 4);
  },
};

export interface FormulaCalculator {
  calculateBmi(weight: number, height: number): number;
  calculateCalories(userData: MacrosData): number;
  calculateProteins(userData: MacrosData): number;
  calculateFat(weight: number): number;
  calculateCarbs(macros: Pick<Macros, 'caloriesAmount' | 'proteinsAmount' | 'fatAmount'>): number;
}

export type UnitSystem = 'imperial' | 'metric';