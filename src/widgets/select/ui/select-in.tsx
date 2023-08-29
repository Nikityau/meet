import React, {PropsWithChildren, useContext} from 'react';
import cn from "classnames";
import {SelectContext} from "../provider/select-context";

type SelectProps = {
} & PropsWithChildren

const SelectIn = ({}: SelectProps) => {

    const cntx = useContext(SelectContext)

    return (
        <div className={'select__current'} onClick={cntx.onSelectClick}>
            <span>{cntx.value}</span>
            <div className={cn('select__arrow', cntx.isOpen ? 'select__arrow_open' : '')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                    <path d="M1.7352 0.5L6.3252 5.44879L10.9152 0.5L12.3252 2.031L6.3252 8.5L0.325195 2.031L1.7352 0.5Z" fill="#828282"/>
                </svg>
            </div>
        </div>
    );
};

export default SelectIn;