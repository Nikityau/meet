import React from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames'

import {EventProps} from "../../event-now";

import Date from "./date";
import Info from "./info";

import '../style/index.scss'

type EventSoonProps = {
    isSmall: boolean
} & EventProps

const EventSoon = ({title, img, type, time, link, location, Like, isSmall = false}: EventSoonProps) => {
    return (
        <Link to={link}>
            <div className={cn('event-soon', { 'event-soon_small': isSmall })}>
                <div className={'event-soon__img'}
                    style={{
                        backgroundImage: `url(${img})`
                    }}
                >

                </div>
                <Date
                    date={'20'}
                    month={'марта'}
                />
                <Info
                    type={type}
                    title={title}
                    location={location}
                    Like={Like}
                />
            </div>
        </Link>
    );
};

export default EventSoon;