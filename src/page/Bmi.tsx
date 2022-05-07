import { useCallback, useEffect, useState } from "react";
import Input from "../component/Input";

type BmiColor = 'red-500' | 'mint-green';
type BmiItem = { value: number; color: BmiColor, weightStatus: WeightStatus };
type WeightStatus = 'morbid' | 'obesity' | 'normal' | 'skinny';

const MIN_BMI = 8;
const MAX_BMI = 40;

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
      return `bg-${bmiItem.color}`;
    }
  }
  return 'bg-red-500';
}

const getBmiItem = (bmi : number): BmiItem => {
  for (const bmiItem of BMI) {
    if (bmi >= bmiItem.value) {
      return bmiItem;
    }
  }
  return BMI[0];
}

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const getBmi = (weight: number, height: number) => height && weight && Math.round(weight / (height / 100) ** 2);
  const updateBmi = useCallback(() => setBmi(getBmi(Number(weight), Number(height))), [height, weight]);

  useEffect(() => {
    updateBmi();
  }, [updateBmi, height, weight]);

  return (
    <>
      <div className="flex flex-start">
        <div className="m-2">
          <Input value={height} setValue={setHeight} type="number">Height</Input>
          <Input value={weight} setValue={setWeight} type="number">Weight</Input>

          {bmi > MIN_BMI && bmi < MAX_BMI && (
            <div className="mt-4">
              BMI

              <div className={`p-2 mt-2 rounded ${getColorFromBmi(bmi)}`}>
                {bmi} ({getBmiItem(bmi).weightStatus})
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bmi;
