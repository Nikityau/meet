import React, {useState} from 'react';

import filter_img from './assets/filter.png'
import {FilterBarProps} from "../../feature/filter-bar";

import './style/index.scss'

type FilterIconProps = {
    Filter: React.FunctionComponent<FilterBarProps>
}


const FilterIcon = ({Filter}: FilterIconProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onIconClick = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={'filter-icon'}>
            <div className={'filter-icon__icon'} onClick={onIconClick}>
                <img src={filter_img} alt={'filter'}/>
            </div>
            {
                <Filter
                    isOpen={isOpen}
                    close={onIconClick}
                />
            }
        </div>
    );
};

export default FilterIcon;