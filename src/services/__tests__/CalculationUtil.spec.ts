import { MacrosData } from "../../types/UserData";
import { FormulaCalculationConverter } from "../CalculationUtil";

describe('Tests for BMI calculation', () => {
  type BmiDataset = [weight: number, height: number, expectedBmi: number];

  it.each<BmiDataset>([
    [62, 165, 22.8],
    [95, 178, 30],
    [130, 182, 39.2],
    [40, 150, 17.8],
  ])('should, considering a weight of %ikg and a height of %icm, give a BMI of %i', (weight: number, height: number, expectedBmi: number) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = formulaCalculator.calculateBmi(weight, height);

    expect(expectedBmi).toBe(result);
  });

  it.each<BmiDataset>([
    [0, 0, 0],
    [0, 165, 0],
    [62, 0, 0],
  ])('should give a BMI of 0 if height or weight is 0', (weight: number, height: number, expectedBmi: number) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = formulaCalculator.calculateBmi(weight, height);

    expect(expectedBmi).toBe(result);
  });
});

describe('Tests for protein needs calculation', () => {
  type ProteinNeedsCalculationDataset = {
    data: MacrosData;
    expected: number;
  };

  const USER_DATA_BASE: Pick<MacrosData, 'weight' | 'height' | 'age' | 'gender'> = {
    weight: 62,
    height: 165,
    gender: 'male',
    age: 30,
  };

  it.each<ProteinNeedsCalculationDataset>([
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'none',
        physicalGoal: 'weight maintenance',
      },
      expected: 45,
    },
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'very high',
        physicalGoal: 'weight maintenance',
      },
      expected: 84,
    },
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'none',
        physicalGoal: 'fat loss',
      },
      expected: 40,
    },
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'very high',
        physicalGoal: 'fat loss',
      },
      expected: 74,
    },
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'none',
        physicalGoal: 'muscle gain',
      },
      expected: 50,
    },
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'very high',
        physicalGoal: 'muscle gain',
      },
      expected: 93,
    },
  ])('should give a result of $expected', ({ data, expected }) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = formulaCalculator.calculateProteins(data);

    expect(expected).toBe(result);
  });
});