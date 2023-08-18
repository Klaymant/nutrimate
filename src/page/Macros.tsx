import Button from "../component/Button";
import Input from "../component/Input";
import MacrosResult from "../component/Macros/MacrosResult";
import { useUserData } from "../providers/UserProvider";
import marsIcon from '../assets/img/mars.png';
import feminineIcon from '../assets/img/femenine.png';
import scalesIcon from '../assets/img/scales.png';
import measurementIcon from '../assets/img/measurement.png';
import bicepsIcon from '../assets/img/muscle.png';
import sofaIcon from '../assets/img/sofa.png';
import walkIcon from '../assets/img/walk.png';
import runningIcon from '../assets/img/running.png';
import sprintIcon from '../assets/img/race.png';
import weightLiftingIcon from '../assets/img/weight-lifting.png';

import { CardSelect, CardSelectOptions } from "../component/CardSelect";
import { ActivityLevel, Gender, PhysicalGoal } from "../types/generic";

const PHYSICAL_GOALS_ITEMS: CardSelectOptions<PhysicalGoal>[] = [
  {
    label: 'Fat loss',
    icon: scalesIcon,
    alt: 'Scales icon',
    choice: 'fat loss',
  },
  {
    label: 'Weight maintenance',
    icon: measurementIcon,
    alt: 'Measurement icon',
    choice: 'weight maintenance',
  },
  {
    label: 'Muscle gain',
    icon: bicepsIcon,
    alt: 'Muscle gain icon',
    choice: 'muscle gain',
  },
];

const GENDER_ITEMS: CardSelectOptions<Gender>[] = [
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

const ACTIVITY_LEVEL_ITEMS: CardSelectOptions<ActivityLevel>[] = [
  {
    label: 'None',
    icon: sofaIcon,
    alt: 'sofa icon',
    choice: 'none',
  },
  {
    label: 'Low',
    icon: walkIcon,
    alt: 'walk icon',
    choice: 'low',
  },
  {
    label: 'Mid',
    icon: runningIcon,
    alt: 'running icon',
    choice: 'mid',
  },
  {
    label: 'High',
    icon: sprintIcon,
    alt: 'race icon',
    choice: 'high',
  },
  {
    label: 'Very high',
    icon: weightLiftingIcon,
    alt: 'weight lifting icon',
    choice: 'very high',
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
          <Input value={height.value} setValue={height.setValue} type="number">Height</Input>
          <Input value={weight.value} setValue={weight.setValue} type="number">Weight</Input>
          <Input value={age.value} setValue={age.setValue} type="number">Age</Input>
          <CardSelect value={physicalGoal.value} setValue={physicalGoal.setValue} title="Physical Goal">
              {PHYSICAL_GOALS_ITEMS.map((item, index) => (
                <CardSelect.Item
                  key={item.label}
                  index={index}
                  icon={item.icon}
                  alt={item.alt}
                  choice={item.choice}
                >
                  {item.label}
                </CardSelect.Item>
              ))}
            </CardSelect>
          <CardSelect value={gender.value} setValue={gender.setValue} title="Gender">
              {GENDER_ITEMS.map((item, index) => (
                <CardSelect.Item
                  key={item.label}
                  index={index}
                  icon={item.icon}
                  alt={item.alt}
                  choice={item.choice}
                >
                  {item.label}
                </CardSelect.Item>
              ))}
          </CardSelect>
          <CardSelect value={activityLevel.value} setValue={activityLevel.setValue} title="Activity level">
              {ACTIVITY_LEVEL_ITEMS.map((item, index) => (
                <CardSelect.Item
                  key={item.label}
                  index={index}
                  icon={item.icon}
                  alt={item.alt}
                  choice={item.choice}
                >
                  {item.label}
                </CardSelect.Item>
              ))}
          </CardSelect>
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