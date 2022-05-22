import { ActivityLevel, UserData } from "../types/generic";

const ACTIVITY_LEVEL_FACTOR: Record<ActivityLevel, { calories: number; proteins: number }> = {
  'none': {
    calories: 1,
    proteins: 0.8,
  },
  'low': {
    calories: 1.2,
    proteins: 1,
  },
  'mid': {
    calories: 1.375,
    proteins: 1.2,
  },
  'high': {
    calories: 1.55,
    proteins: 1.35,
  },
  'very high': {
    calories: 1.725,
    proteins: 1.5,
  },
};

export const CalculatorUtil = {
  getBmi(weight: number, height: number): number {
    return height && weight && Math.round(weight / (height / 100) ** 2);
  },
  calculateCalories(userData: UserData): number {
    if (userData.gender === 'male') {
      return Math.round((88.362 + (13.397 * userData.weight) + (4.799 * userData.height ) - (5.677 * userData.age)) * ACTIVITY_LEVEL_FACTOR[userData.activityLevel].calories);
    }

    return Math.round((447.593 + (9.247 * userData.weight) + (3.098 * userData.height) - (4.330 * userData.age)) * ACTIVITY_LEVEL_FACTOR[userData.activityLevel].calories);
  },
  calculateProteins(weight: number, activityLevel: ActivityLevel): number {
    return Math.round(weight * ACTIVITY_LEVEL_FACTOR[activityLevel].proteins);
  },
  calculateFat(weight: number): number {
    return Math.round(weight * 1);
  },
  calculateCarbs(caloriesAmount: number, proteinsAmount: number, fatAmount: number): number {
    return Math.round((caloriesAmount - (4 * proteinsAmount) - (4 * fatAmount)) / 4);
  },
};
