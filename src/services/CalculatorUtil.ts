import { ActivityLevel, Gender } from "../types/generic";

const ACTIVITY_LEVEL_FACTOR: Record<ActivityLevel, number> = {
  'none': 1,
  'low': 1.2,
  'mid': 1.375,
  'high': 1.55,
  'very high': 1.725,
};

export const CalculatorUtil = {
  getBmi(weight: number, height: number): number {
    return height && weight && Math.round(weight / (height / 100) ** 2);
  },
  calculateCalories(gender: Gender, height: number, weight: number, age: number, activityLevel: ActivityLevel): number {
    if (gender === 'male') {
      return Math.round((88.362 + (13.397 * weight) + (4.799 * height ) - (5.677 * age)) * ACTIVITY_LEVEL_FACTOR[activityLevel]);
    }

    return Math.round((447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)) * ACTIVITY_LEVEL_FACTOR[activityLevel]);
  },
  calculateProteins(weight: number): number {
    return weight * 1.5;
  },
  calculateFat(weight: number): number {
    return weight * 1;
  },
  calculateCarbs(caloriesAmount: number, proteinsAmount: number, fatAmount: number): number {
    return Math.round((caloriesAmount - (4 * proteinsAmount) - (4 * fatAmount)) / 4);
  },
};
