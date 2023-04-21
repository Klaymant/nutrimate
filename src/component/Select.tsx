import { Dispatch, ReactNode, SetStateAction } from "react";
import useFocus from "../hook/UseFocus";

export type Option = {
  label: string;
  value: string;
};

type Props<T> = {
  children: ReactNode;
  options: Array<Option>;
  value: string;
  setValue: Dispatch<SetStateAction<T>>;
};

const Select = <T,>({ children, options, value, setValue }: Props<T>) => {
  const { isFocused, focus, blur } = useFocus();

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div className="my-2">
        <label className={`mr-6 mb-1 block ${isFocused ? 'text-cornflower-blue font-semibold ml-1 duration-300' : ''}`}>{children}</label>
        <select onChange={handleChange} onFocus={focus} onBlur={blur} className="rounded outline-none my-2 w-full">
          {options.map((option) => (
            <option key={option.value} value={option.value} selected={option.value === value}>{option.label}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
