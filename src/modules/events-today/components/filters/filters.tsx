import React from 'react';

import {Filter, FilterObject} from "../../../filter";

import {useEventToday} from "../../zustand/zustand";

import {dataFilter} from "../../data/data-filter";
import {dataFilterCategory} from '../../data/data-filter-category'

import './style/filters.scss'
import {FilterCategory} from "../../../filter-category";

const Filters = () => {

    const changeFilter = useEventToday(state => state.changeEvTypeFilter)

    const onChangeFilter = (filter: FilterObject) => {
        changeFilter(filter)
    }

    const onChangeCategoryFilter = (filter: FilterObject) => {

    }

    return (
        <div className={'events-today__filters'}>
            <Filter
                onChangeChosen={onChangeFilter}
                filerList={dataFilter}
            />
            <FilterCategory
                onChangeCategoryListFilter={onChangeCategoryFilter}
                filterList={dataFilterCategory}
            />
            <div className={'events-today__filter'}></div>
        </div>
    );
};

export default Filters;