import React from 'react';
import Button from "../../../shared/ui/button/button";
import FilterCategory from "./filter-category";

const ArchiveFilter = () => {
    const applyFilters = () => {

    }

    const resetFilters = () => {

    }

    return (
        <div className={'archive-filter'}>
            <FilterCategory/>
            <div className={'archive-filter__btns'}>
                <div className={'archive-filter__btn'}>
                    <Button
                        text={'Применить'}
                        onClick={applyFilters}
                    />
                </div>
                <div className={'archive-filter__btn archive-filter__btn_r'}>
                    <Button
                        text={'Сбросить'}
                        onClick={resetFilters}
                    />
                </div>
            </div>
        </div>
    );
};

export default ArchiveFilter;