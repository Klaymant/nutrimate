import { Dispatch, ReactNode, SetStateAction, useState } from "react";

type InputProps = {
  children: ReactNode;
  value: string | number;
  type?: 'text' | 'pwd' | 'number';
  setValue: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
};

const Input = ({ children, value, type = 'text', setValue }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  const focus = () => setIsFocused(true);
  const blur = () => setIsFocused(false);

  return (
    <>
      <div className="my-2">
        <label className={`mr-6 mb-1 block ${isFocused ? 'text-cornflower-blue font-semibold ml-1 duration-300' : ''}`}>{children}</label>
        <input type={type} value={value} onChange={onChange} onFocus={focus} onBlur={blur} className="rounded border-2 border-grey-600 focus:border-cornflower-blue pl-2 py-1 outline-none" />
      </div>
    </>
  )
};

export default Input;
