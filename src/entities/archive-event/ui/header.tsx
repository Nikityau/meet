import React from 'react';
import HeaderInfo from "./header-info";

type ArchiveEventHeaderProps = {
    orgImage: string
    date: Date,
    time: string,
    location: string,
    title: string,
    Views: React.ReactNode
}

const ArchiveEventHeader = (
    {
        Views,
        date,
        location,
        time,
        title,
        orgImage
    }:ArchiveEventHeaderProps) => {
    return (
        <div className={'archive-event-header'}>
            <div className={'archive-event-header__left'}>
                <div className={'archive-event-header__org'}
                    style={{
                        backgroundImage: `url(${orgImage})`
                    }}
                >
                </div>
                <HeaderInfo
                    date={date}
                    time={time}
                    location={location}
                    title={title}
                />
            </div>
            {
                Views
            }
            <div className={'archive-event-header__underline'}/>
        </div>
    );
};

export default ArchiveEventHeader;