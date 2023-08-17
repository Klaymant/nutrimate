import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from "react";

const CardContext = createContext<{ value: any, setValue: Dispatch<SetStateAction<any>> }>({
    value: null,
    setValue: () => {},
});

export const CardSelect = <T,>({ children, value, setValue, title = null }: Props<T>) => {
    return (
        <>
            {title && <p>{title}</p>}
            <ul className="flex flex-wrap gap-4 ml-4">
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

const CardSelectItem = ({ children, icon, alt, choice }: CardSelectItemProps) => {
    const { value, setValue } = useContext(CardContext);
    const handleChange = () => {
        setValue(choice);
    };
    const baseClasses = 'flex justify-center items-center rounded-xl p-4 flex-col w-16 h-16 cursor-pointer';
    const unselectedClasses = 'bg-gray-300 text-black';
    const selectedClasses = 'bg-cornflower-blue text-white';
    const itemClasses = [baseClasses, value === choice ? selectedClasses : unselectedClasses].join(' ');

    return (
        <>
            <li onClick={handleChange} className={itemClasses}>
                <img src={icon} alt={alt} className="h-4 w-4" />
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
    icon: string;
    alt: string;
    choice: string;
};
