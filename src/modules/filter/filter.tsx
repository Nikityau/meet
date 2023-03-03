import React, {useState} from 'react';
import cn from 'classnames'

import './style/filter.scss'

import all_filter_img from './assets/all.png'
import arrow_img from './assets/arrow.png'
import {fi} from "date-fns/locale";

type FilterProps = {
    onChangeChosen: (chosen: string) => void,
    filerList: any[]
}

const Filter = ({onChangeChosen, filerList}:FilterProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [chosenFilter, setChosenFilter] = useState<string>("Все мероприятия")

    return (
        <div className={cn(
            'filter',
            {
                'filter_open': isOpen
            }
        )}>
            <div className={'filter__f-block filter__chosen'}>
                <div className={'filter__img'}>
                    <img src={all_filter_img} alt={'all_filter'}/>
                </div>
                <div className={'filter__title'}>
                    <span>{ chosenFilter }</span>
                </div>
                <div className={'filter__arrow'}>
                    <img src={arrow_img} alt={'arrow_img'}/>
                </div>
            </div>
            <div className={'filter__list'}>
                {
                    filerList.map(filter => (
                        <React.Fragment key={filter.id}>
                            <div className={'filter__f-block'}>
                                <div className={'filter__img'}>
                                    <img src={filter.icon} alt={'all_filter'}/>
                                </div>
                                <div className={'filter__title'}>
                                    <span>{ filter.title }</span>
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};

export default Filter;