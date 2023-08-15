import React from 'react';

import ArchiveFilter from "./ui/archive-filter";
import EventsList from "./ui/events-list";

import './style/index.scss'

const Archive = () => {
    return (
        <div className={'archive-page app-container'}>
            <ArchiveFilter/>
            <EventsList/>
        </div>
    );
};

export default Archive;