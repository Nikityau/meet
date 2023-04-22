import React from 'react';

import {OrganizerProps} from "entities/organizer";
import type {Event} from 'entities/events-slider'

import EventInfo from "./event-info";
import EventDescription from "./event-description";
import EventProvider from "../provider/event-provider";

import {CategoriesData, CommentType} from "../model/data";

import '../style/index.scss'

export type EventData = {
    id: string
    date: Date,
    title: string,
    img: string,
    qr: string,
    time: string,
    where: string,
    description: string,
    comments: CommentType[],
    similarEvents: Event[],
    similarCategory: CategoriesData[],
    organizers: OrganizerProps[]
}

const Event = () => {

    return (
        <EventProvider>
            <EventDescription/>
            <EventInfo/>
        </EventProvider>
    );
};

export default Event;