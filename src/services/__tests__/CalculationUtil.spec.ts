import { BmrData, Macros, MacrosData } from "../../types/UserData";
import { FormulaCalculationConverter } from "../CalculationUtil";

describe('BMI calculation', () => {
  type BmiDataset = [weight: number, height: number, expectedBmi: number];

  it.each<BmiDataset>([
    [62, 165, 22.8],
    [95, 178, 30],
    [130, 182, 39.2],
    [40, 150, 17.8],
  ])('should, considering a weight of %ikg and a height of %icm, give a BMI of %i', (weight: number, height: number, expectedBmi: number) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = formulaCalculator.calculateBmi(weight, height);

    expect(result).toBe(expectedBmi);
  });

  it.each<BmiDataset>([
    [0, 0, 0],
    [0, 165, 0],
    [62, 0, 0],
  ])('should give a BMI of 0 if height or weight is 0', (weight: number, height: number, expectedBmi: number) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = formulaCalculator.calculateBmi(weight, height);

    expect(result).toBe(expectedBmi);
  });
});

describe('Calories needs calculation', () => {
  type CaloriesNeedsCalculationDataset = {
    data: MacrosData;
    expected: number;
  };

  const USER_DATA_BASE: Pick<MacrosData, 'weight' | 'height' | 'age' | 'gender'> = {
    weight: 62,
    height: 165,
    gender: 'male',
    age: 30,
  };

  it.each<CaloriesNeedsCalculationDataset>([
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'none',
        physicalGoal: 'weight maintenance',
      },
      expected: 1541,
    },
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'very high',
        physicalGoal: 'weight maintenance',
      },
      expected: 2657,
    },
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'none',
        physicalGoal: 'fat loss',
      },
      expected: 1232,
    },
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'very high',
        physicalGoal: 'fat loss',
      },
      expected: 2126,
    },
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'none',
        physicalGoal: 'muscle gain',
      },
      expected: 1849,
    },
    {
      data: {
        ...USER_DATA_BASE,
        activityLevel: 'very high',
        physicalGoal: 'muscle gain',
      },
      expected: 3189,
    },
  ])('should give a result of $expected calories', ({ data, expected }) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = formulaCalculator.calculateCalories(data);

    expect(result).toBe(expected);
  });
});

describe('Protein needs calculation', () => {
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

    expect(result).toBe(expected);
  });
});

describe('Fat needs calculation', () => {
  type FatNeedsCalculationDataset = [weight: number, expected: number];

  it.each<FatNeedsCalculationDataset>([
    [62, 62],
    [95, 95],
    [130, 130],
    [40, 40],
  ])('should, considering a weight of %i, give a result of %i', (weight, expected) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = formulaCalculator.calculateFat(weight);

    expect(expected).toBe(result);
  });
});

describe('Carbs needs calculation', () => {
  type CarbNeedsCalculationDataset = {
    data: Pick<Macros, 'caloriesAmount' | 'proteinsAmount' | 'fatAmount'>;
    expected: number;
  };

  it.each<CarbNeedsCalculationDataset>([
    {
      data: {
        caloriesAmount: 2000,
        proteinsAmount: 45,
        fatAmount: 62,
      },
      expected: 316,
    },
  ])('should give a result of $expected', ({ data, expected }) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = formulaCalculator.calculateCarbs(data);

    expect(result).toBe(expected);
  });
});

describe('BMR calculation', () => {
  type BmrCalculationDataset = {
    data: BmrData;
    expected: number;
  };

  it.each<BmrCalculationDataset>([
    {
      data: {
        height: 165,
        weight: 62,
        age: 30,
        gender: 'male',
      },
      expected: 1541,
    },
    {
      data: {
        height: 155,
        weight: 40,
        age: 44,
        gender: 'female',
      },
      expected: 1107,
    },
  ])('should give a result of $expected kcal', ({ data, expected }) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = Math.round(formulaCalculator.calculateBmr(data));

    expect(result).toBe(expected);
  });

  const BASE_USER: BmrData = {
    height: 165,
    weight: 62,
    age: 30,
    gender: 'male',
  };

  it.each<BmrCalculationDataset>([
    {
      data: {
        ...BASE_USER,
        height: 0,
        weight: 80,
      },
      expected: 0,
    },
    {
      data: {
        ...BASE_USER,
        height: 176,
        weight: 0,
      },
      expected: 0,
    },
    {
      data: {
        ...BASE_USER,
        gender: 'female',
        height: 0,
        weight: 80,
      },
      expected: 0,
    },
    {
      data: {
        ...BASE_USER,
        gender: 'female',
        height: 176,
        weight: 0,
      },
      expected: 0,
    },
  ])('should give a BMR of 0 if height or weight is 0', ({ data, expected }) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = Math.round(formulaCalculator.calculateBmr(data));

    expect(result).toBe(expected);
  });
});
