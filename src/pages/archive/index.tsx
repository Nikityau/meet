import React from 'react';

import ArchiveFilter from "./ui/archive-filter";
import EventsList from "./ui/events-list";
import ArchiveWrapper from "./provider/archive-wrapper";

import './style/index.scss'

const Archive = () => {
    return (
        <ArchiveWrapper>
            <div className={'archive-page app-container'}>
                <ArchiveFilter/>
                <EventsList/>
            </div>
        </ArchiveWrapper>
    );
};

export default Archive;