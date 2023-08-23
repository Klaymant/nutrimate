import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from "react";

const CardContext = createContext<{ value: any, setValue: Dispatch<SetStateAction<any>> }>({
    value: null,
    setValue: () => {},
});

export const CardSelect = <T,>({ children, value, setValue, title = null }: Props<T>) => {
    return (
        <>
            {title && <h2 className="text-lg">{title}</h2>}
            <ul
                className="flex flex-wrap gap-4 ml-4 leading-none font-semibold my-4"
            >
                <CardContext.Provider value={{ value, setValue }}>
                    {children}
                </CardContext.Provider>
            </ul>
        </>
    );
};
CardSelect.Item = (props: CardSelectItemProps) => {
    return <CardSelectItem {...props} />;
}

const CardSelectItem = ({ children, icon, alt, choice, index }: CardSelectItemProps) => {
    const { value, setValue } = useContext(CardContext);
    const handleChange = () => {
        setValue(choice);
    };
    const onKeyDown = (keyEvent: any) => {
        if (keyEvent.key === 'Enter') {
            setValue(choice);
        }
    };
    const isSelected = value === choice;
    const baseClasses = 'flex justify-center items-center rounded-xl p-4 text-center flex-col w-28 h-28 cursor-pointer';
    const unselectedClasses = 'bg-gray-300 text-black';
    const selectedClasses = 'bg-primary text-white';
    const itemClasses = [baseClasses, isSelected ? selectedClasses : unselectedClasses].join(' ');

    return (
        <>
            <li
                onClick={handleChange}
                className={itemClasses}
                tabIndex={0}
                onKeyDown={onKeyDown}
            >
                <img src={icon} alt={alt} className="h-6 w-6 mb-2" />
                { children }
            </li>
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
