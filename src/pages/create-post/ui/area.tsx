import React from 'react';
import {Outlet} from "react-router-dom";

const Area = () => {
    return (
        <div className={'creating-post__area'}>
            <Outlet/>
        </div>
    );
};

export default Area;