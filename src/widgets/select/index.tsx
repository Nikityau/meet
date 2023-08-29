import React from 'react';

import SelectContextF from "./provider/select-context";
import Options from "./ui/options";
import SelectIn from "./ui/select-in";

import './style/index.scss'

type SelectProps = {
    init: string
    options: string[],
    width: number | 'auto',
    onChange: (text: string) => void
}

const Select = ({init, onChange,options}:SelectProps) => {
    return (
        <SelectContextF onChange={onChange} init={init}>
            <SelectIn/>
            <Options
                options={options}
            />
        </SelectContextF>
    );
};

export default Select;