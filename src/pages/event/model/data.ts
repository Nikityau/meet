import {nanoid} from "nanoid";

import u1 from '../assets/u1.png'
import u2 from '../assets/u2.png'
import kapka from '../assets/kapka.png'

import {OrganizerProps} from "../ui/organizer";

export type CommentType = {
    id: string,
    userImage: string,
    userFullName: string,
    comment: string
}

export const dataComments: CommentType[] = [
    {
        id: nanoid(),
        userFullName: 'Sveta Pikul',
        userImage: u1,
        comment: 'Спасибо Вам за возможность познакомится с учебным заведением!'
    },
    {
        id: nanoid(),
        userFullName: 'Vera Brounce',
        userImage: u2,
        comment: ' В прошлом году было круто! Надеюсь поступить в ваш вуз '
    }
]

export type CategoriesData = {
    id: string,
    title: string
}

export const dataCategories: CategoriesData[] = [
    {
        id: nanoid(),
        title: 'Экскурсии'
    },
    {
        id: nanoid(),
        title: 'Экскурсии'
    },
    {
        id: nanoid(),
        title: 'Экскурсии'
    },
]


export const dataOrganizers: OrganizerProps[] = [
    {
        id: nanoid(),
        img: kapka,
        type: 'Преподаватель',
        canMessage: true,
        surname: 'Капкаев',
        name: 'Андрей',
        patronymic: 'Андреевич'
    },
    {
        id: nanoid(),
        img: kapka,
        type: 'Преподаватель',
        canMessage: true,
        surname: 'Капкаев',
        name: 'Андрей',
        patronymic: 'Андреевич'
    },
]

export const dataDays = [
    {
        id: nanoid(),
        day: 'пн'
    },
    {
        id: nanoid(),
        day: 'вт'
    },
    {
        id: nanoid(),
        day: 'ср'
    },
    {
        id: nanoid(),
        day: 'чт'
    },
    {
        id: nanoid(),
        day: 'пт'
    },
    {
        id: nanoid(),
        day: 'сб'
    },
    {
        id: nanoid(),
        day: 'вс'
    },
]