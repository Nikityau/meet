import React from 'react';

import AfterUserLogin from "../../helpers/hoc/after-user-login";

import {Calendar} from "../../modules/calendar";
import {EventsToday} from "../../modules/events-today";
import {NearestEvents} from "../../modules/nearest-events";
import {MySubscription} from "../../modules/my-subscription";
import Banner from "../../components/banner/banner";

import './style/meets.scss'

const Meets = () => {
    return (
        <div className={'meets-page'}>
            <Calendar/>
            <EventsToday/>
            <NearestEvents/>
            <AfterUserLogin fallback={null}>
                <MySubscription/>
            </AfterUserLogin>
            <Banner/>
        </div>
    );
};

export default Meets;