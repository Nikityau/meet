import {v4} from "uuid";
import {EventPreviewNowProps} from "../../../entities/event-preview-now";

import rstu_img from '../assets/rstu.png'

export const eventsTodayData: EventPreviewNowProps[] = [
    {
        id: v4(),
        title: 'День открытых дверей РГУПС',
        date: '6',
        month: 'марта',
        time: '11:00',
        location: 'Главный корпус',
        categories: ['Экскурсия', 'Экскурсия'],
        img: rstu_img
    },
    {
        id: v4(),
        title: 'День открытых дверей РГУПС',
        date: '6',
        month: 'марта',
        time: '11:00',
        location: 'Главный корпус',
        categories: ['Экскурсия'],
        img: rstu_img
    },
    {
        id: v4(),
        title: 'День открытых дверей РГУПС',
        date: '6',
        month: 'марта',
        time: '11:00',
        location: 'Главный корпус',
        categories: ['Экскурсия', 'Экскурсия'],
        img: rstu_img
    },
]