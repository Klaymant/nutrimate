import { Dispatch, ReactNode, SetStateAction } from "react";

export const Select = <T,>({ children, options, id, setValue }: Props<T>) => {
    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <div className="select mb-2">
                <select id={id} onClick={handleChange}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className="focus"></span>
            </div>
        </>
    );
};

type Props<T> = {
    children: ReactNode;
    id: string;
    options: Option[];
    setValue: Dispatch<SetStateAction<T>>;
};
export type Option = { value: string; label: string };
