import React from 'react';

import ArchiveFilter from "./ui/archive-filter";

import './style/index.scss'

const Archive = () => {
    return (
        <div className={'archive-page app-container'}>
            <ArchiveFilter/>
        </div>
    );
};

export default Archive;