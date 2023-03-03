import React from 'react';

import {Filter} from "../../../filter";
import {dataFilter} from "../../data/data-filter";

import './style/filters.scss'

const Filters = () => {
    return (
        <div className={'events-today__filters'}>
            <Filter
                onChangeChosen={() => {}}
                filerList={dataFilter}
            />
            <div className={'events-today__filter'}></div>
            <div className={'events-today__filter'}></div>
        </div>
    );
};

export default Filters;