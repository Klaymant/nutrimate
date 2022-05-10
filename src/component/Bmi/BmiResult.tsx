import { useEffect, useState } from "react";
import { TimeUtil } from "../../services/TimeUtil";

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

const BmiResult = ({ bmi }: BmiResultProps) => {
  const [delayedBmi, setDelayedBmi] = useState(bmi);

  useEffect(() => {
    (async () => {
      for (let i = 0; i < bmi; i++) {
        setDelayedBmi(i);
        await TimeUtil.sleep();
      }
    })()
  }, [bmi])

  return (
    <>
      <div className="mt-14 mb-8">
        <h1 className="mt-4">
          <span className="font-semibold">BMI</span>: {delayedBmi} (<span>{getBmiItem(bmi).weightStatus}</span>)
        </h1>
      </div>
    </>
  );
}

export default BmiResult;
