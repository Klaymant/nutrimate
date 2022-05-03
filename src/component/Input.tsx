import { Dispatch, ReactNode, SetStateAction } from "react";

type InputProps = {
  children: ReactNode;
  value: string | number;
  setValue: Dispatch<SetStateAction<string>>;
};

const Input = ({ children, value, setValue }: InputProps) => {
  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="my-2">
        <label className="mr-6 mb-1 block">{children}</label>
        <input type="text" value={value} onChange={onChange} className="rounded border-b-2 border-black pl-2 outline-none" />
      </div>
    </>
  )
};

export default Input;
