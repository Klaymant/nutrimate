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
  })

  it.each<BmiDataset>([
    [0, 0, 0],
    [0, 165, 0],
    [62, 0, 0],
  ])('should give a BMI of 0 if height or weight is 0', (weight: number, height: number, expectedBmi: number) => {
    const formulaCalculator = FormulaCalculationConverter('metric');
    const result: number = formulaCalculator.calculateBmi(weight, height);

    expect(expectedBmi).toBe(result);
  })
});

export {};
