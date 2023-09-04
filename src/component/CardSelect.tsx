import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from "react";

const CardContext = createContext<{ value: any, setValue: Dispatch<SetStateAction<any>>; title: string | null }>({
    value: null,
    title: null,
    setValue: () => {},
});

export const CardSelect = <T,>({ children, value, setValue, title = null }: Props<T>) => {
    return (
        <>
            {title && <h2 className="text-lg">{title}</h2>}
            <div
                className="flex flex-wrap gap-4 ml-4 leading-none font-semibold my-4"
            >
                <CardContext.Provider value={{ value, setValue, title }}>
                    {children}
                </CardContext.Provider>
            </div>
        </>
    );
};
CardSelect.Item = (props: CardSelectItemProps) => {
    return <CardSelectItem {...props} />;
}

const CardSelectItem = ({ children, icon, alt, choice, index }: CardSelectItemProps) => {
    const { value, setValue, title } = useContext(CardContext);
    const isSelected = value === choice;
    const handleChange = () => {
        setValue(choice);
    };

    return (
        <>
            <div className={`card-select ${isSelected ? 'selected' : 'unselected'}`}>
                <img src={icon} alt={alt} className="h-6 w-6 mb-2" />
                <input type="radio" id={String(children)} name={String(title)} onChange={handleChange} />
                <label htmlFor={String(children)}>
                    {children}
                </label>
            </div>
        </>
    );
};

type Props<T> = {
    children: ReactNode;
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
    title?: string | null;
};

type CardSelectItemProps = {
    children: ReactNode;
    index: number;
    icon: string;
    alt: string;
    choice: string;
};

export type CardSelectOptions<T> = {
    label: string;
    icon: string;
    alt: string;
    choice: T;
};
