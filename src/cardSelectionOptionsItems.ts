import { CardSelectOptions } from "./component/CardSelect";
import { Gender, PhysicalGoal } from "./types/generic";
import marsIcon from './assets/img/mars.png';
import feminineIcon from './assets/img/femenine.png';
import scalesIcon from './assets/img/scales.png';
import measurementIcon from './assets/img/measurement.png';
import bicepsIcon from './assets/img/muscle.png';

export const GENDER_ITEMS: CardSelectOptions<Gender>[] = [
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

export const PHYSICAL_GOALS_ITEMS: CardSelectOptions<PhysicalGoal>[] = [
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
