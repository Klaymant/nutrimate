import BmiResult from "../component/Bmi/BmiResult";
import Button from "../component/Button";
import Input from "../component/Input";
import { useUserData } from "../providers/UserProvider";

const Bmi = () => {
  const { height, weight, bmi, updateBmi } = useUserData();

  return (
    <>
      <form className="m-2" >
        <Input value={height.value} setValue={height.setValue} type="number">Height</Input>
        <Input value={weight.value} setValue={weight.setValue} type="number">Weight</Input>
        <Button onClick={updateBmi}>Calculate</Button>
        {bmi.value > 0 && (
          <BmiResult bmi={bmi.value} />
        )}
      </form>
    </>
  );
};

export default Bmi;
