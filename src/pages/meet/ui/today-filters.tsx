import React from 'react';

import FilterIcon from "../../../widgets/filter-icon";
import FilterBar from "../../../feature/filter-bar";

const TodayFilters = () => {
    return (
        <div className={'today-event__filters'}>
            <FilterIcon
                Filter={FilterBar}
            />
        </div>
    );
};

export default TodayFilters;