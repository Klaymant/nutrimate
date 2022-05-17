import { getBmiItem } from "./BmiController";
import { useDelayedBmi } from "./UseDelayedBmi";

type BmiResultProps = {
  bmi: number;
};

const BmiResult = ({ bmi }: BmiResultProps) => {
  const delayedBmi = useDelayedBmi(bmi);

  return (
    <>
      <div className="flex justify-center font-semibold text-center my-2">
        <div>
          <div className="flex mt-4 bg-cornflower-blue w-20 h-20 rounded-full text-center justify-center items-center p-8 text-xl bg-opacity-70 shadow-md">
            {delayedBmi}
          </div>
          {delayedBmi === bmi - 1 && getBmiItem(bmi).weightStatus}
        </div>
      </div>
    </>
  );
}

export default BmiResult;
