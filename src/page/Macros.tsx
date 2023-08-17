import Button from "../component/Button";
import Input from "../component/Input";
import MacrosResult from "../component/Macros/MacrosResult";
import { Select, Option } from "../component/Select";
import { useUserData } from "../providers/UserProvider";
import marsIcon from '../assets/img/mars.png';
import feminineIcon from '../assets/img/femenine.png';
import { CardSelect } from "../component/CardSelect";

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
    value: 'very high',
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

const PHYSICAL_GOALS: Array<Option> = [
  {
    label: 'Fat loss',
    value: 'fat loss',
  },
  {
    label: 'Weight maintenance',
    value: 'weight maintenance',
  },
  {
    label: 'Muscle gain',
    value: 'muscle gain',
  },
];

const GENDER_ITEMS = [
  {
    label: 'Female',
    icon: feminineIcon,
    alt: 'Feminine icon',
    choice: 'female',
  },
  {
    label: 'Male',
    icon: marsIcon,
    alt: 'Mars icon',
    choice: 'male',
  },
];

const Macros = () => {
  const {
    height,
    weight,
    physicalGoal,
    gender,
    age,
    activityLevel,
    caloriesAmount,
    proteinsAmount,
    fatAmount,
    carbsAmount,
    updateMacros,
  } = useUserData();

  return (
    <>
      <div className="flex flex-start">
        <div className="m-2 w-full">
          <Select options={PHYSICAL_GOALS} setValue={physicalGoal.setValue} id="physical goal">Physical Goal</Select>
          <CardSelect value={gender.value} setValue={gender.setValue} title="Gender">
              {GENDER_ITEMS.map((item) => (
                <CardSelect.Item
                  key={item.label}
                  icon={item.icon}
                  alt={item.alt}
                  choice={item.choice}
                >
                  {item.label}
                </CardSelect.Item>
              ))}
            </CardSelect>
          <Input value={height.value} setValue={height.setValue} type="number">Height</Input>
          <Input value={weight.value} setValue={weight.setValue} type="number">Weight</Input>
          <Input value={age.value} setValue={age.setValue} type="number">Age</Input>
          <Select options={ACTIVITY_OPTIONS} setValue={activityLevel.setValue} id="activity level">Activity level</Select>
          <Button onClick={updateMacros}>Calculate</Button>

          {caloriesAmount.value !== 0 && (
            <MacrosResult
              caloriesAmount={caloriesAmount.value}
              proteinsAmount={proteinsAmount.value}
              fatAmount={fatAmount.value}
              carbsAmount={carbsAmount.value}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Macros;