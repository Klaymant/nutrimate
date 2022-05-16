export type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Array<Option>;
};

const Select = ({ options }: Props) => (
  <select>
    {options.map((option) => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select>
);

export default Select;
