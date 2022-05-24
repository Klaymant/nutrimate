import { CalculationUtil } from "../CalculationUtil";

const { calculateBmi } = CalculationUtil;

describe('Tests for BMI calculation', () => {
  it.each(([
    [62, 165, 23],
    [95, 178, 30],
    [130, 182, 39],
    [40, 150, 18],
  ]))('should %ikg & %icm give a bmi of %i', (weight: number, height: number, bmi: number) => {
    const result: number = calculateBmi(weight, height);

    expect(bmi).toBe(result);
  })

  it.each([
    [0, 0, 0],
    [0, 165, 0],
    [62, 0, 0],
  ])('should give 0 if weight (%ikg) or height(%icm) is 0', (weight: number, height: number, bmi: number) => {
    const result: number = calculateBmi(weight, height);

    expect(bmi).toBe(result);
  })
});

export {};
