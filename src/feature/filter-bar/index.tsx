import React from 'react';

import FBIndex from "./ui";
import FbContextProvider from "./provider/fb-context";

import './style/index.scss'

export type FilterBarProps = {}

const FilterBar = ({}: FilterBarProps) => {
    return (
       <FbContextProvider>
            <FBIndex/>
       </FbContextProvider>
    );
};

export default FilterBar;