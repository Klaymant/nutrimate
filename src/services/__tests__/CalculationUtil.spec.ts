import { CalculationUtil } from "../CalculationUtil";

const { calculateBmi } = CalculationUtil;

describe('Tests for BMI calculation', () => {
  type BmiDatasetType = Array<[weight: number, height: number, bmi: number]>;

  const testBmiDataset = (bmiDataset: BmiDatasetType) => {
    for (const data of bmiDataset) {
      const bmi: number = calculateBmi(data[0], data[1]);

      expect(bmi).toBe(data[2]);
    }
  }

  it('should get correct BMI', () => {
    const bmiDataset: BmiDatasetType = [
      [62, 165, 23],
      [95, 178, 30],
      [130, 182, 39],
      [40, 150, 18],
    ];

    testBmiDataset(bmiDataset);
  });

  it('should get 0 value if height or weight is 0', () => {
    const bmiDataset: BmiDatasetType = [
      [0, 0, 0],
      [0, 165, 0],
      [62, 0, 0],
    ];

    testBmiDataset(bmiDataset);
  });
});

export {};
