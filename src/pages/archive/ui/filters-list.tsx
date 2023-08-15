import React from 'react';
import {tags} from "../../../shared/data/tags";
import FilterBox from "./filter-box";

const FiltersList = () => {
    return (
        <div className={'filters-list'}>
            {
                tags.map(d => (
                    <FilterBox
                        text={d.selection}
                        key={d.id}
                    />
                ))
            }
        </div>
    );
};

export default FiltersList;