type BmiColor = 'red-500' | 'mint-green';
type BmiItem = { value: number; color: BmiColor, weightStatus: WeightStatus };
type WeightStatus = 'morbid' | 'obesity' | 'normal' | 'skinny';

const BMI: Array<BmiItem> = [
  {
    value: 30,
    color: 'red-500',
    weightStatus: 'obesity',
  },
  {
    value: 25,
    color: 'red-500',
    weightStatus: 'obesity',
  },
  {
    value: 18,
    color: 'mint-green',
    weightStatus: 'normal',
  },
  {
    value: 0,
    color: 'red-500',
    weightStatus: 'skinny',
  },
];

const getColorFromBmi = (bmi: number): string => {
  for (const bmiItem of BMI) {
    if (bmi >= bmiItem.value) {
      return `${bmiItem.color}`;
    }
  }
  return 'red-500';
}

const getBmiItem = (bmi : number): BmiItem => {
  for (const bmiItem of BMI) {
    if (bmi >= bmiItem.value) {
      return bmiItem;
    }
  }
  return BMI[0];
}

type BmiResultProps = {
  bmi: number;
};

const BmiResult = ({ bmi }: BmiResultProps) => (
  <>
    <div className="mt-4">
      <h1 className="text-center font-bold">BMI</h1>

      <div className={`p-2 mt-2 rounded border-2 border-black`}>
        {bmi} (<span className={`text-${getColorFromBmi(bmi)} font-bold`}>{getBmiItem(bmi).weightStatus}</span>)
      </div>
    </div>
  </>
);

export default BmiResult;
