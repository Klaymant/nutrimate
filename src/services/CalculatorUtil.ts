export const CalculatorUtil = {
  getBmi(weight: number, height: number) {
    return height && weight && Math.round(weight / (height / 100) ** 2);
  },
}