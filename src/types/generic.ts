export type Gender = 'male' | 'female';
export type ActivityLevel = 'none' | 'low' | 'mid' | 'high' | 'very high';
export type PhysicalGoal = 'fat loss' | 'weight maintenance' | 'muscle gain';
export type UserData = {
  gender: Gender;
  height: number;
  weight: number;
  age: number;
  activityLevel: ActivityLevel;
  physicalGoal: PhysicalGoal;
};
export type MacrosData = {
  calories: number;
  proteins: number;
  fat: number;
  carbs: number;
};