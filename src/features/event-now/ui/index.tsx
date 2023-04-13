import React from 'react';
import {Link} from "react-router-dom";

import Time from "./time";
import Like from "./like";
import Info from "./info";

import '../style/index.scss'

export type EventProps = {
    time: string
    title: string
    location: string
    type: 'all' | 'staff',
    img: string,
    link: string
}
const EventNow = ({time, title, type, location, img, link}: EventProps) => {
    return (
        <Link to={link}>
            <div className={'events-now'}
                 style={{
                     backgroundImage: `url(${img})`
                 }}
            >
                <Time time={time}/>
                <Like/>
                <Info
                    location={location}
                    type={type}
                    title={title}
                />
            </div>
        </Link>
    );
};

export default EventNow;