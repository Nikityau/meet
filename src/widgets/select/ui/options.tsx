import React, {useContext, useEffect} from 'react';
import cn from 'classnames'
import {SelectContext} from "../provider/select-context";

type OptionsProps = {
    options: string[]
}
const Options = ({options}: OptionsProps) => {

    const cntx = useContext(SelectContext)

    useEffect(() => {
        console.log(cntx)
    }, [cntx])

    return (
        <div className={cn('select__options', 'custom-scrollbar', cntx.isOpen ? '' : 'select__options_close')}>
            {
                options.map((o, i) => (
                    <div className={'select__option'}
                         key={i}
                         onClick={() => {
                             cntx.onOptionClick(o)
                         }}
                    >
                        <span>{o}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default Options;