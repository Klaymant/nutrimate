import { useState } from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import MacrosResult from "../component/Macros/MacrosResult";
import Select, { Option } from "../component/Select";
import { CalculatorUtil } from "../services/CalculatorUtil";
import { ActivityLevel, Gender } from "../types/generic";

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

const GENDER_OPTIONS: Array<Option> = [
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Male',
    value: 'male',
  },
];

const { calculateCalories, calculateProteins, calculateFat, calculateCarbs } = CalculatorUtil;

const Macros = () => {
  const [gender, setGender] = useState<Gender>('female');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('mid');
  const [caloriesAmount, setCaloriesAmount] = useState(0);
  const [proteinsAmount, setProteinsAmount] = useState(0);
  const [fatAmount, setFatAmount] = useState(0);
  const [carbsAmount, setCarbsAmount] = useState(0);

  const updateResult = () => {
    const calories = calculateCalories(gender, height, weight, age, activityLevel);

    setCaloriesAmount(calories);
    setProteinsAmount(calculateProteins(weight));
    setFatAmount(calculateFat(weight));
    console.log(caloriesAmount);
    setCarbsAmount(calculateCarbs(calories, proteinsAmount, fatAmount));
  };

  return (
    <>
      <div className="flex flex-start">
        <div className="m-2 w-full">
          <Select options={GENDER_OPTIONS} value={gender} setValue={setGender}>Gender</Select>
          <Input value={height} setValue={setHeight} type="number">Height</Input>
          <Input value={weight} setValue={setWeight} type="number">Weight</Input>
          <Input value={age} setValue={setAge} type="number">Age</Input>
          <Select options={ACTIVITY_OPTIONS} value={activityLevel} setValue={setActivityLevel}>Activity level</Select>
          <Button onClick={updateResult}>Calculate</Button>

          {caloriesAmount !== 0 && (
            <MacrosResult caloriesAmount={caloriesAmount} proteinsAmount={proteinsAmount} fatAmount={fatAmount} carbsAmount={carbsAmount} />
          )}
        </div>
      </div>
    </>
  );
};

export default Macros;