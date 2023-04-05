import React from 'react';
import {Route, Routes} from "react-router-dom";

const Routing = () => {
    return (
        <Routes>
           <Route path={'/'} element={'HOME'}/>
        </Routes>
    );
};

export default Routing;