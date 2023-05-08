import React from 'react';

import {EventNavigation} from "widgets/event-navigation";
import {SquareCalendar} from "widgets/square-calendar";
import {Organizers} from "widgets/organizers";

import {useEventData} from "../zustand";

import Gallery from "./gallery";
import Notify from "./notify";

const EventInfo = () => {

    const {event} = useEventData()

    return (
        <div className={'event__info'}>
            <div className={'event__notify-n-gallery'}>
                <Gallery/>
                <Notify/>
            </div>
            <EventNavigation
                qr={event.qr}
                time={event.time}
                where={event.where}
            />
            <SquareCalendar
                initDate={event.date}
                chosenDates={[event.date]}
                canChangeMonth={false}
            />
            <Organizers
                organizers={event.organizers}
            />
        </div>
    );
};

export default EventInfo;