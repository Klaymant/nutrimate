type BmiItem = { value: number; style: string, weightStatus: WeightStatus };
type WeightStatus = 'morbid obesity' | 'obesity' | 'overweight' | 'normal weight' | 'underweight';

export const BMI: Array<BmiItem> = [
  {
    value: 40,
    style: 'border-error-dark text-error-dark',
    weightStatus: 'morbid obesity',
  },
  {
    value: 30,
    style: 'border-error text-error',
    weightStatus: 'obesity',
  },
  {
    value: 25,
    style: 'border-warning text-warning',
    weightStatus: 'overweight',
  },
  {
    value: 18.5,
    style: 'text-success border-success',
    weightStatus: 'normal weight',
  },
  {
    value: 0,
    style: 'text-error border-error',
    weightStatus: 'underweight',
  },
];

export const getBmiItem = (bmi : number): BmiItem => {
  for (const bmiItem of BMI) {
    if (bmi >= bmiItem.value) {
      return bmiItem;
    }
  }
  return BMI[0];
}