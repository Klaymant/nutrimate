import { getBmiItem } from "./BmiController";
import { useDelayedBmi } from "./UseDelayedBmi";

const BmiResult = ({ bmi }: BmiResultProps) => {
  const { result, isRunning } = useDelayedBmi(bmi);
  const bmiItem = getBmiItem(bmi);
  const resultClasses =
    `flex mt-4 border-4 w-20 h-20 rounded-full text-center justify-center items-center p-8 text-xl bg-opacity-70 shadow-md ${bmiItem.style}`;

  return (
    <>
      <section className="flex flex-col justify-center items-center font-semibold text-center my-2">
        <h2>Your BMI</h2>
        <output className={resultClasses}>
          {result}
        </output>

        <p>
          {!isRunning && bmiItem.weightStatus}
        </p>
      </section>
    </>
  );
};

type BmiResultProps = {
  bmi: number;
};

export default BmiResult;
