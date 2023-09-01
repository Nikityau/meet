import React from 'react';

import FilterIcon from "../../../widgets/filter-icon";
import FilterBar from "../../../feature/filter-bar";
import SelectionFilter from "./selection-filter";
import FiltersApplied from "./filters-applied";

import {useFilterMeet} from "../../../local-states/filter-meet";

const TodayFilters = () => {

    const {filters} = useFilterMeet()

    return (
        <div className={'today-event__filters'}>
            <FilterIcon
                FilterBar={
                    <FilterBar/>
                }
            />
            {
                filters == null
                    ? <SelectionFilter/>
                    : <FiltersApplied/>
            }
        </div>
    );
};

export default TodayFilters;