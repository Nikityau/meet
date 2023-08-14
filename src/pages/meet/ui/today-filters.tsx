import React from 'react';

import FilterIcon from "../../../widgets/filter-icon";
import FilterBar from "../../../feature/filter-bar";
import SelectionFilter from "./selection-filter";

const TodayFilters = () => {
    return (
        <div className={'today-event__filters'}>
            <FilterIcon
                FilterBar={
                    <FilterBar
                        close={() => {
                            console.log('ok')
                        }}
                    />
                }
            />
            <SelectionFilter/>
        </div>
    );
};

export default TodayFilters;