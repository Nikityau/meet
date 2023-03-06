import React, {useState} from 'react';
import cn from 'classnames'

import {FilterObject} from "./type/filter-object";

import Element from "./components/element/element";

import './style/filter.scss'

import all_filter_img from './assets/all.png'
import arrow_img from './assets/arrow.png'


type FilterProps = {
    onChangeChosen: (chosen: string) => void,
    filerList: any[]
}

const defFilter: FilterObject = {
    icon: all_filter_img,
    title: 'Все меропрития',
    filter: null
}

const Filter = ({onChangeChosen, filerList}: FilterProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [chosenFilter, setChosenFilter] = useState<FilterObject>(defFilter)

    const onOpen = () => {
        setIsOpen(prev => !prev)
    }

    const onClickFilter = (filter: FilterObject) => {
        setIsOpen(false)

        if (filter.filter == chosenFilter.filter) {
            setChosenFilter(defFilter)


            return
        }

        setChosenFilter(filter)
    }

    return (
        <div className={cn(
            'filter',
            {
                'filter_open': isOpen
            }
        )}>
            <Element
                title={chosenFilter.title}
                icon={chosenFilter.icon}
                filter={chosenFilter.filter}
                classNames={['filter__chosen']}
                onClickFilter={onOpen}
            >
                <div className={'filter__arrow'}>
                    <img src={arrow_img} alt={'arrow_img'}/>
                </div>
            </Element>
            <div className={'filter__list'}>
                {
                    filerList.map(filter => (
                        <React.Fragment key={filter.id}>
                            <Element
                                title={filter.title}
                                icon={filter.icon}
                                filter={filter.filter}
                                onClickFilter={onClickFilter}
                                classNames={[]}
                            />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};

export default Filter;