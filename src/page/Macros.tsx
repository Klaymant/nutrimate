import { useState } from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import MacrosResult from "../component/Macros/MacrosResult";
import Select, { Option } from "../component/Select";

// enum ActivityLevel {
//   NONE,
//   LOW,
//   MID,
//   HIGH,
//   VERY_HIGH,
// }

const ACTIVITY_OPTIONS: Array<Option> = [
  {
    label: 'None',
    value: 'none',
  },
  {
    label: 'Low',
    value: 'low',
  },
  {
    label: 'Mid',
    value: 'mid',
  },
  {
    label: 'High',
    value: 'high',
  },
  {
    label: 'Very high',
    value: 'very-high',
  },
];

const Macros = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  // const [activityLevel, setActivityLevel] = useState<ActivityLevel>(ActivityLevel.NONE);
  const [result, setResult] = useState(0);

  const updateResult = () => setResult(0);

  return (
    <>
      <div className="flex flex-start">
        <div className="m-2">
          <Input value={height} setValue={setHeight} type="number">Height</Input>
          <Input value={weight} setValue={setWeight} type="number">Weight</Input>
          <Input value={age} setValue={setAge} type="number">Age</Input>
          <Select options={ACTIVITY_OPTIONS} />
          <Button onClick={updateResult}>Calculate</Button>

          {result && (
            <MacrosResult caloriesAmount={0} proteinsAmount={0} fatAmount={0} carbsAmount={0} />
          )}
        </div>
      </div>
    </>
  );
};

export default Macros;