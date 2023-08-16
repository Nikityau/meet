import React from 'react';

import './style/index.scss'

type CommentsEventProps = {
    eventId: string,
    commentsCount: number
}

const CommentsEvent = ({commentsCount, eventId}: CommentsEventProps) => {
    return (
        <div className={'comments-event'}>
            <div className={'comments-event__icon'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                    <path d="M19.25 6.51104C20.1341 6.79549 20.75 7.6392 20.75 8.60822V12.8938C20.75 14.0304 19.9026 14.9943 18.7697 15.0867C18.4308 15.1144 18.0909 15.1386 17.75 15.1592V18.25L14.75 15.25C13.3963 15.25 12.0556 15.1948 10.7302 15.0866C10.4319 15.0623 10.1534 14.9775 9.90494 14.8451M19.25 6.51104C19.0986 6.46232 18.9393 6.43 18.7739 6.41628C17.4472 6.30616 16.1051 6.25 14.75 6.25C13.3948 6.25 12.0528 6.30616 10.7261 6.41627C9.59499 6.51015 8.75 7.47323 8.75 8.60821V12.8937C8.75 13.731 9.20986 14.4746 9.90494 14.8451M19.25 6.51104V4.63731C19.25 3.01589 18.0983 1.61065 16.4903 1.40191C14.4478 1.13676 12.365 1 10.2503 1C8.13533 1 6.05233 1.13678 4.00963 1.40199C2.40173 1.61074 1.25 3.01598 1.25 4.63738V10.8626C1.25 12.484 2.40173 13.8893 4.00964 14.098C4.58661 14.1729 5.16679 14.2376 5.75 14.2918V19L9.90494 14.8451" stroke="#292929"/>
                </svg>
            </div>
            <div className={'comments-event__count'}>
                <span>{commentsCount}</span>
            </div>
        </div>
    );
};

export default CommentsEvent;