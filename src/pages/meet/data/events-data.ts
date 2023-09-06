import {v4} from "uuid";
import {EventPreviewNowProps} from "../../../entities/event-preview-now";
import {EventPreviewSoonProps} from "../../../entities/event-preview-soon";

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

export const eventsSoonData: EventPreviewSoonProps[] = [
    {
        id: v4(),
        title: 'День открытых дверей РГУПС',
        date: '6',
        month: 'марта',
        img: rstu_img
    },
    {
        id: v4(),
        title: 'День открытых дверей РГУПС',
        date: '6',
        month: 'марта',
        img: rstu_img
    },
    {
        id: v4(),
        title: 'День открытых дверей РГУПС',
        date: '6',
        month: 'марта',
        img: rstu_img
    },
    {
        id: v4(),
        title: 'День открытых дверей РГУПС',
        date: '6',
        month: 'марта',
        img: rstu_img
    },
]