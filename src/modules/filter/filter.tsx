import React, {useEffect, useState} from 'react';
import cn from 'classnames'

import {FilterObject} from "./type/filter-object";

import Element from "./components/element/element";

import './style/filter.scss'

import all_filter_img from './assets/all.png'
import close_img from './assets/close.png'
import arrow_img from './assets/arrow.png'


type FilterProps = {
    onChangeChosen: (filter: FilterObject) => void,
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

    const onMouseLeave = () => {
        setIsOpen(false)
    }

    const onArrowClick = (e) => {
        if (chosenFilter.filter == null) return

        e.stopPropagation()

        setChosenFilter(defFilter)
    }


    useEffect(() => {
        onChangeChosen(chosenFilter)
    }, [chosenFilter])

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
                classNames={[
                    'filter__chosen',
                    chosenFilter.filter == null
                        ? ""
                        : "filter__chosen_not_def"
                ]}
                onClickFilter={onOpen}
                onMouseLeave={null}
            >
                <div className={'filter__arrow'} onClick={onArrowClick}>
                    <img src={
                        chosenFilter.filter == null
                            ? arrow_img
                            : close_img
                    } alt={'arrow_img'}/>
                </div>
            </Element>
            <div className={'filter__list'}
                 onMouseLeave={onMouseLeave}
            >
                {
                    filerList.map(filter => (
                        <Element
                            key={filter.id}
                            title={filter.title}
                            icon={filter.icon}
                            filter={filter.filter}
                            onClickFilter={onClickFilter}
                            onMouseLeave={null}
                            classNames={[]}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Filter;