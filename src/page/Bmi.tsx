import { useState } from "react";
import BmiResult from "../component/Bmi/BmiResult";
import Button from "../component/Button";
import Input from "../component/Input";
import { CalculatorUtil } from "../services/CalculatorUtil";

const Bmi = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const updateBmi = () => setBmi(CalculatorUtil.getBmi(weight, height));

  return (
    <>
      <div className="flex flex-start">
        <div className="m-2">
          <Input value={height} setValue={setHeight} type="number">Height</Input>
          <Input value={weight} setValue={setWeight} type="number">Weight</Input>
          <Button onClick={updateBmi}>Calculate</Button>

          {bmi > 0 && (
            <BmiResult bmi={bmi} />
          )}
        </div>
      </div>
    </>
  );
};

export default Bmi;
