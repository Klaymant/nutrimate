import { Dispatch, ReactNode, SetStateAction } from "react";

type InputProps = {
  children: ReactNode;
  value: string | number;
  type?: 'text' | 'pwd' | 'number';
  setValue: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
};

const Input = ({ children, value, type = 'text', setValue }: InputProps) => {
  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="my-2">
        <label className="mr-6 mb-1 block">{children}</label>
        <input type={type} value={value} onChange={onChange} className="rounded border-2 border-grey-600 focus:border-mint-green pl-2 py-1 outline-none" />
      </div>
    </>
  )
};

export default Input;
