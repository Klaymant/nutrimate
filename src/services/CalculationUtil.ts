import { ACTIVITY_LEVEL_FACTOR, PHYSICAL_GOAL_FACTOR } from "../factors";
import { Macros, MacrosData } from "../types/UserData";

const Formulas = {
  harris(userData: MacrosData) {
    if (userData.gender === 'male') {
      return 88.362 + (13.397 * userData.weight) + (4.799 * userData.height ) - (5.677 * userData.age);
    }

    return (447.593 + (9.247 * userData.weight) + (3.098 * userData.height) - (4.330 * userData.age));
  }
};

export const CalculationUtil = {
  calculateBmi(weight: number, height: number): number {
    if (weight === 0 || height === 0) {
      return 0;
    }
    
    return Math.round(weight / (height / 100) ** 2);
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
