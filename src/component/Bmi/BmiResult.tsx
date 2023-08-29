import { getBmiItem } from "./BmiController";
import { useDelayedBmi } from "./UseDelayedBmi";

type BmiResultProps = {
  bmi: number;
};

const BmiResult = ({ bmi }: BmiResultProps) => {
  const delayedBmi = useDelayedBmi(bmi);

  return (
    <>
      <section className="flex flex-col justify-center items-center font-semibold text-center my-2">
        <h2>Your BMI</h2>
        <output className="flex mt-4 bg-primary w-20 h-20 rounded-full text-center justify-center items-center p-8 text-xl bg-opacity-70 shadow-md">
          {delayedBmi}
        </output>

        <p>
          {delayedBmi === bmi - 1 && getBmiItem(bmi).weightStatus}
        </p>
      </section>
    </>
  );
}

export default BmiResult;
