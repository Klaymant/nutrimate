import { useCallback, useEffect, useState } from "react";
import Input from "../component/Input";

type BmiColor = 'red' | 'green' | 'orange' | 'pink' | 'yellow';

const MIN_BMI = 8;
const MAX_BMI = 40;

const BMI_COLORS: Array<{ bmi: number; color: BmiColor }> = [
  {
    bmi: 18,
    color: 'red'
  },
  {
    bmi: 25,
    color: 'green',
  },
  {
    bmi: 30,
    color: 'pink',
  },
];

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const getBmi = (weight: number, height: number) => height && weight && Math.round(weight / (height / 100) ** 2);
  const updateBmi = useCallback(() => setBmi(getBmi(Number(weight), Number(height))), [height, weight]);
  const getColor = (): string => {
    for (const bmi_color of BMI_COLORS) {
      if (bmi < bmi_color.bmi) {
        return `bg-${bmi_color.color}-500`;
      }
    }
    return 'bg-red-500';
  }

  useEffect(() => {
    updateBmi();
  }, [updateBmi, height, weight]);

  return (
    <>
      <div className="flex justify-center">
        <div className="m-2">
          <Input value={height} setValue={setHeight}>Height <i>(cm)</i></Input>
          <Input value={weight} setValue={setWeight}>Weight <i>(kg)</i></Input>

          {bmi > MIN_BMI && bmi < MAX_BMI && (
            <div className={`rounded ${getColor()} p-5 mt-4`}>
              BMI: {bmi}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bmi;
