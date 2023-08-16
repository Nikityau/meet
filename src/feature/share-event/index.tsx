import React from 'react';
import {toShortNum} from "../../shared/helpers/to-short-num";

import './style/index.scss'

type ShareEventProps = {
    eventId: string,
    shareCount: number
}

const ShareEvent = ({shareCount,eventId}: ShareEventProps) => {
    return (
        <div className={'share-event'}>
            <div className={'share-event__icon'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                    <path d="M16.1263 14.6323L16.1931 10.3902M16.1931 10.3902L11.951 10.3234M16.1931 10.3902L10.807 15.6094M19.7631 19.4631C16.1935 22.9221 10.4957 22.8324 7.03672 19.2628C3.57774 15.6932 3.66741 9.99545 7.237 6.53647C10.8066 3.07749 16.5044 3.16716 19.9633 6.73675C23.4223 10.3063 23.3327 16.0041 19.7631 19.4631Z" stroke="#292929"/>
                </svg>
            </div>
            <div className={'share-event__count'}>
                <span>{toShortNum(shareCount)}</span>
            </div>
        </div>
    );
};

export default ShareEvent;