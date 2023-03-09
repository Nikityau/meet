import React, {useState} from 'react';
import cn from 'classnames'

import {FilterObject} from "../filter";

import {dataFilterCategory, useEventToday} from "../events-today";

import category_img from './assets/category.png'
import arrow_img from './assets/arrow.png'
import delete_img from './assets/close.png'

import './style/filter-category.scss'

type FilterCategoryProps = {
    onChangeCategoryListFilter: (filter: FilterObject) => void
    filterList: any[]
}

const FilterCategory = ({filterList}: FilterCategoryProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const categoryCount = useEventToday(state => state.categoryFilter)
    const updCategoryFilter = useEventToday(state => state.changeCategoryFilter)
    const clearFilters = useEventToday(state => state.clearCategoryFilter)

    const onClickMain = () => {
        setIsOpen(prev => !prev)
    }

    const onClickFilter = (filter: any) => {
        updCategoryFilter(filter)
    }

    const onMouseLeave = () => {
        setIsOpen(false)
    }

    const onArrowClick = (e) => {
        if(categoryCount == null) {
            return
        }

        e.stopPropagation()

        clearFilters()
    }

    return (
        <div className={cn(
            'filter-category',
            {
                'filter-category_open': isOpen
            }
        )}>
            <div className={'filter-category__main'}
                 onClick={onClickMain}
            >
                <div className={'filter-category__main-wrapper'}>
                    <div className={'filter-category__main-icon'}>
                        <img src={category_img} alt={'category'}/>
                    </div>
                    <div className={'filter-category__main-title'}>
                       <span>
                           {
                               categoryCount != null &&
                               categoryCount.length > 0
                                   ? `Выбрано ${categoryCount.length}`
                                   : "Категории"
                           }
                       </span>
                    </div>
                </div>
                <div className={'filter-category__main-arrow'}
                    onClick={onArrowClick}
                >
                    <img src={
                        categoryCount != null &&
                        categoryCount.length > 0
                            ? delete_img
                            : arrow_img
                    } alt={'arrow'}/>
                </div>
            </div>
            <div className={'filter-category__list'}
                onMouseLeave={onMouseLeave}
            >
                {
                    dataFilterCategory.map(filter => (
                        <div
                            key={filter.id}
                            className={'filter-category__list-filter'}
                            onClick={() => {
                                onClickFilter(filter)
                            }}
                        >
                            <span>{filter.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FilterCategory;