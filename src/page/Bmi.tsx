import { useState } from "react";
import BmiResult from "../component/Bmi/BmiResult";
import Button from "../component/Button";
import Input from "../component/Input";
import { CalculationUtil } from "../services/CalculationUtil";

const Bmi = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const updateBmi = () => setBmi(CalculationUtil.calculateBmi(weight, height));

  return (
    <>
      <div className="flex flex-start">
        <div className="m-2 w-full">
          <Input value={height} setValue={setHeight} type="number">Height</Input>
          <Input value={weight} setValue={setWeight} type="number">Weight</Input>
          <Button onClick={updateBmi}>Calculate</Button>
        </div>
      </div>

      {bmi > 0 && (
        <BmiResult bmi={bmi} />
      )}
    </>
  );
};

export default Bmi;
