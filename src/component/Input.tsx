import { Dispatch, ReactNode, SetStateAction } from "react";
import useFocus from "../hook/UseFocus";


const Input = ({ children, value, type = 'text', setValue }: InputProps) => {
  const { isFocused, focus, blur } = useFocus();
  const baseClasses = 'mr-6 mb-1 block text-lg';
  const focusClasses = isFocused ? 'text-primary font-semibold duration-300 text-sm mb-3' : '';
  const labelClasses = [baseClasses, focusClasses].join(' ');
  
  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="my-2">
        <label className={labelClasses}>{children}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={focus}
          onBlur={blur}
          className="rounded border-2 border-grey-600 focus:border-primary pl-2 py-1 outline-none w-full"
        />
      </div>
    </>
  )
};

type InputProps = {
  children: ReactNode;
  value: string | number;
  type?: 'text' | 'pwd' | 'number';
  setValue: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
};

export default Input;
