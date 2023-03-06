import React from 'react';
import cn from 'classnames'

import {FilterObject} from "../../type/filter-object";

type ElementProps = {
    title: string
    icon: string
    filter: string
    classNames: string[],
    onClickFilter: (filter: FilterObject | null) => void
} & React.PropsWithChildren

const strSubstr = (str: string) => {
    const maxLen = 25

    if(str.length > maxLen) return str.substring(0, maxLen) + '...'

    return str
}

const Element = ({title, icon, filter,classNames, onClickFilter,children}: ElementProps) => {

    const onClick = () => {
        onClickFilter({ title, icon,  filter})
    }

    return (
        <div className={cn('filter__f-block', classNames)}
            onClick={onClick}
        >
           <div className={'filter__f-block-wrapper'}>
               <div className={'filter__img'}>
                   <img src={icon} alt={'all_filter'}/>
               </div>
               <div className={'filter__title'}>
                   <span>{strSubstr(title)}</span>
               </div>
           </div>
            {children}
        </div>
    );
};

export default Element;