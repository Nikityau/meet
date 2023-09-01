import React from 'react';
import cn from 'classnames'

import filter_img from './assets/filter.png'

import './style/index.scss'
import {useFilterIcon} from "./helpers/hook/use-filter-icon";

type FilterIconProps = {
    FilterBar: React.ReactNode
}

const FilterIcon = ({FilterBar}: FilterIconProps) => {

    const {onIconClick, isOpen} = useFilterIcon()

    return (
        <div className={'filter-icon'}>
            <div className={'filter-icon__icon'} onClick={onIconClick}>
                <img src={filter_img} alt={'filter'}/>
            </div>
            <div className={cn(
                'filter-icon__bar',
                isOpen ? 'filter-icon__bar_open'
                    : 'filter-icon__bar_close'
                )}>
                {
                    FilterBar
                }
            </div>
        </div>
    );
};

export default FilterIcon;