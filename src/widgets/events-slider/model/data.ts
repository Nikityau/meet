import {nanoid} from "nanoid";

import rstu_img from '../assets/rstu.png'
import tech_img from '../assets/tech.png'

type Event = {
    id: string
    time: string
    title: string
    type: 'all' | 'staff'
    location: string
    img: string,
    link: string
}


export const eventsData: Event[] = [
    {
        id: nanoid(),
        time: '11:00',
        title: 'День открытых дверей РГУПС',
        type: 'all',
        location: 'A-128',
        img: rstu_img,
        link: '/events/today'
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
    {
        id: nanoid(),
        time: '11:00',
        title: 'День открытых дверей РГУПС',
        type: 'all',
        location: 'Главный корпус',
        img: tech_img,
        link: '/events/today'
    },
    {
        id: nanoid(),
        time: '11:00',
        title: 'День открытых дверей РГУПС',
        type: 'all',
        location: 'Главный корпус',
        img: tech_img,
        link: '/events/today'
    },
]