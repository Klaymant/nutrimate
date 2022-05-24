import { CalculationUtil } from "../CalculationUtil";

const { calculateBmi } = CalculationUtil;

describe('Tests for BMI calculation', () => {
  type BmiDataset = [weight: number, height: number, expectedBmi: number];

  it.each<BmiDataset>([
    [62, 165, 23],
    [95, 178, 30],
    [130, 182, 39],
    [40, 150, 18],
  ])('should %ikg & %icm give a bmi of %i', (weight: number, height: number, expectedBmi: number) => {
    const result: number = calculateBmi(weight, height);

    expect(expectedBmi).toBe(result);
  })

  it.each<BmiDataset>([
    [0, 0, 0],
    [0, 165, 0],
    [62, 0, 0],
  ])('should give a bmi of 0 if weight (%ikg) or height(%icm) is 0', (weight: number, height: number, expectedBmi: number) => {
    const result: number = calculateBmi(weight, height);

    expect(expectedBmi).toBe(result);
  })
});

export {};
