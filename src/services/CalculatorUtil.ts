import { ACTIVITY_LEVEL_FACTOR, PHYSICAL_GOAL_FACTOR } from "../factors";
import { MacrosData, UserData } from "../types/generic";

export const CalculatorUtil = {
  getBmi(weight: number, height: number): number {
    return height && weight && Math.round(weight / (height / 100) ** 2);
  },
  calculateCalories(userData: UserData): number {
    if (userData.gender === 'male') {
      return Math.round(
        (88.362 + (13.397 * userData.weight) + (4.799 * userData.height ) - (5.677 * userData.age)) * ACTIVITY_LEVEL_FACTOR[userData.activityLevel].calories * PHYSICAL_GOAL_FACTOR[userData.physicalGoal].calories
      );
    }

    return Math.round(
      (447.593 + (9.247 * userData.weight) + (3.098 * userData.height) - (4.330 * userData.age)) * ACTIVITY_LEVEL_FACTOR[userData.activityLevel].calories * PHYSICAL_GOAL_FACTOR[userData.physicalGoal].calories
    );
  },
  calculateProteins(userData: UserData): number {
    return Math.round(
      userData.weight * ACTIVITY_LEVEL_FACTOR[userData.activityLevel].proteins * PHYSICAL_GOAL_FACTOR[userData.physicalGoal].proteins
    );
  },
  calculateFat(weight: number): number {
    return Math.round(weight * 1);
  },
  calculateCarbs(macros: Pick<MacrosData, 'calories' | 'proteins' | 'fat'>): number {
    return Math.round((macros.calories - (4 * macros.proteins) - (4 * macros.fat)) / 4);
  },
};
