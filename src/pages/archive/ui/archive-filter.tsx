import React from 'react';
import Button from "../../../shared/ui/button/button";
import FilterCategory from "./filter-category";
import MonthFilter from "./month-filter";

const ArchiveFilter = () => {
    const applyFilters = () => {

    }

    const resetFilters = () => {

    }

    return (
        <div className={'archive-filter'}>
            <FilterCategory/>
            <MonthFilter/>
            <div className={'archive-filter__btns'}>
                <div className={'archive-filter__btn'}>
                    <Button
                        children={
                            <span>Применить</span>
                        }
                        onClick={applyFilters}
                    />
                </div>
                <div className={'archive-filter__btn archive-filter__btn_r'}>
                    <Button
                        children={
                            <span>Сбросить</span>
                        }
                        onClick={resetFilters}
                    />
                </div>
            </div>
        </div>
    );
};

export default ArchiveFilter;