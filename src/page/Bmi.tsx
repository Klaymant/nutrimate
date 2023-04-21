import { useState } from "react";
import BmiResult from "../component/Bmi/BmiResult";
import Button from "../component/Button";
import Input from "../component/Input";
import { CalculationUtil } from "../services/CalculationUtil";
import { useUserData } from "../providers/UserProvider";

const Bmi = () => {
  const { height, weight }= useUserData();
  const [bmi, setBmi] = useState(0);
  const updateBmi = () => setBmi(CalculationUtil.calculateBmi(weight.value, height.value));

  return (
    <>
      <div className="flex flex-start">
        <div className="m-2 w-full">
          <Input value={height.value} setValue={height.setValue} type="number">Height</Input>
          <Input value={weight.value} setValue={weight.setValue} type="number">Weight</Input>
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
