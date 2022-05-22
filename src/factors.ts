import { ActivityLevel, PhysicalGoal } from "./types/generic";

export const ACTIVITY_LEVEL_FACTOR: Record<ActivityLevel, { calories: number; proteins: number }> = {
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

export const PHYSICAL_GOAL_FACTOR: Record<PhysicalGoal, { calories: number; proteins: number }> = {
  'fat loss': {
    calories: 0.8,
    proteins: 0.8,
  },
  'weight maintenance': {
    calories: 1,
    proteins: 0.9,
  },
  'muscle gain': {
    calories: 1.2,
    proteins: 1,
  },
};