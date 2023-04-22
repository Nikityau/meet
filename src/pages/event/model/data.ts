import {nanoid} from "nanoid";

import type {Event} from "entities/events-slider";

import rstu_img from "entities/events-slider/assets/rstu.png";
import tech_img from "entities/events-slider/assets/tech.png";

export type CommentType = {
    id: string,
    userImage: string,
    userFullName: string,
    comment: string
}

export type CategoriesData = {
    id: string,
    title: string
}

export const dataEventPast: Event[] = [
    {
        id: nanoid(),
        time: '11:00',
        title: 'День открытых дверей РГУПС',
        type: 'all',
        location: 'A-128',
        img: rstu_img,
        link: '/events/today',
    },
    {
        id: nanoid(),
        time: '11:00',
        title: 'День открытых дверей РГУПС',
        type: 'staff',
        location: 'Главный корпус',
        img: tech_img,
        link: '/events/today'
    },
]