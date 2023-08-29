import React, {useState} from 'react';

export const SelectContext = React.createContext({
    isOpen: false,
    value: "",
    onSelectClick: () => {},
    onOptionClick: (opt: string) => {}
})

type SelectContextFProps = {
    init: string,
    onChange: (str: string) => void
} & React.PropsWithChildren

const SelectContextF = ({init,onChange,children}:SelectContextFProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>(init)

    const onSelectClick = () => {
        setIsOpen(prev => !prev)
    }

    const onOptionClick = (option: string) => {
        setValue(option)
        onChange(option)
        setIsOpen(false)
    }

    return (
        <SelectContext.Provider value={{
            isOpen,
            value,
            onSelectClick,
            onOptionClick
        }}>
            <div className={'select'}>
                {children}
            </div>
        </SelectContext.Provider>
    );
};

export default SelectContextF;