import BmiResult from "../component/Bmi/BmiResult";
import Button from "../component/Button";
import Input from "../component/Input";
import { useUserData } from "../providers/UserProvider";

const Bmi = () => {
  const { height, weight, bmi, updateBmi }= useUserData();

  return (
    <>
      <div className="flex flex-start">
        <form className="m-2 w-full" >
          <Input value={height.value} setValue={height.setValue} type="number">Height</Input>
          <Input value={weight.value} setValue={weight.setValue} type="number">Weight</Input>
          <Button onClick={updateBmi}>Calculate</Button>
        </form>
      </div>

      {bmi.value > 0 && (
        <BmiResult bmi={bmi.value} />
      )}
    </>
  );
};

export default Bmi;
