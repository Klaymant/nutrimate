import { Dispatch, SetStateAction } from "react";

export const RangeInput = <T,>({ label, options, value, setValue }: Props<T>) => {
    const lastOption = options[options.length - 1];
    const nbSteps = +lastOption / options.length - 1;
    const onChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className="my-2">
                <label htmlFor={label} className="block text-lg">{label}</label>
                <input
                    type="range"
                    id="temp1"
                    name="temp1"
                    list="values"
                    min={options[0]}
                    max={lastOption}
                    step={String(nbSteps)}
                    value={String(value)}
                    onChange={onChange}
                />
                <datalist id="values">
                    {options.map((option) => (
                        <option value={option} label={option} key={option} />
                    ))}
                </datalist>
                <p>{String(value)}</p>
            </div>
        </>
    );
};

type Props<T> = {
    label: string;
    options: string[];
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
};
