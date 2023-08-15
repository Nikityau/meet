import React from 'react';
import FiltersList from "./filters-list";

const FilterCategory = () => {
    return (
        <div className={'filter-category'}>
            <div className={'filter-category__title'}>
                <span>Категории</span>
            </div>
            <FiltersList/>
        </div>
    );
};

export default FilterCategory;