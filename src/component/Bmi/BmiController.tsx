type BmiColor = 'red-500' | 'mint-green';
type BmiItem = { value: number; color: BmiColor, weightStatus: WeightStatus };
type WeightStatus = 'obesity' | 'overweight' | 'normal weight' | 'underweight';

export const BMI: Array<BmiItem> = [
  {
    value: 30,
    color: 'red-500',
    weightStatus: 'obesity',
  },
  {
    value: 25,
    color: 'red-500',
    weightStatus: 'overweight',
  },
  {
    value: 18,
    color: 'mint-green',
    weightStatus: 'normal weight',
  },
  {
    value: 0,
    color: 'red-500',
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