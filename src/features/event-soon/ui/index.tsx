import React from 'react';
import {Link} from "react-router-dom";

import {EventProps} from "../../event-now/ui";

import Date from "./date";
import Info from "./info";

import '../style/index.scss'

const EventSoon = ({title, img, type, time, link, location}: EventProps) => {
    return (
        <Link to={link}>
            <div className={'event-soon'}
                 style={{
                     backgroundImage: `url(${img})`
                 }}
            >
                <Date
                    date={'20'}
                    month={'марта'}
                />
                <Info
                    type={type}
                    title={title}
                    location={location}
                />
            </div>
        </Link>
    );
};

export default EventSoon;