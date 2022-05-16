import { getBmiItem } from "./BmiController";
import { useDelayedBmi } from "./UseDelayedBmi";

type BmiResultProps = {
  bmi: number;
};

const BmiResult = ({ bmi }: BmiResultProps) => {
  const delayedBmi = useDelayedBmi(bmi);

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
