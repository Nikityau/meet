import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import cn from 'classnames'

import './style/index.scss'

const Event = () => {
    const p = useLocation()

    return (
        <div className={'event'}>
            <div className={'event__description'}>

            </div>
            <div className={'event__info'}>

            </div>
        </div>
    );
};

export default Event;