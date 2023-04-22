import {nanoid} from "nanoid";
import {v4} from "uuid";

import {EventData} from "../ui";

import img from "../assets/event.png";
import qr from '../assets/qr.png'
import u1 from "../assets/u1.png";
import u2 from "../assets/u2.png";

import rstu_img from "entities/events-slider/assets/rstu.png";
import tech_img from "entities/events-slider/assets/tech.png";
import kapka from "../assets/kapka.png";

export const stateEvent:EventData = {
    id: v4(),
    title: 'Современная архитектура веб приложений',
    description: 'В Центре IT-Притяжения РГУПС пройдет научно-популярная лекция для всех желающих студентов, на тему «Современная архитектура веб приложений»\n' +
        '\n' +
        'Лекцию читает к.т.н. доцент кафедры «Вычислительная техника и автоматизированные системы управления» Капкаев Андрей Андреевич.\n' +
        '\n' +
        'Лекция будет проходить в режиме диалога, когда каждый может задать любой вопрос, ответ на который формирует совместно ребята и педагог.\n' +
        '\n' +
        'Студенты ознакомиться с элементами, системами, используемыми при построении современных веб приложений, популярными и наиболее востребованными в информационных компаниях технологиями веба.\n' +
        '\n',
    date: new Date(),
    comments: [
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
    ],
    similarEvents: [
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
    ],
    similarCategory: [
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
    ],
    organizers: [
        {
            id: nanoid(),
            img: kapka,
            type: 'Преподаватель',
            surname: 'Капкаев',
            name: 'Андрей',
            patronymic: 'Андреевич',
            Message: null
        },
        {
            id: nanoid(),
            img: kapka,
            type: 'Преподаватель',
            surname: 'Капкаев',
            name: 'Андрей',
            patronymic: 'Андреевич',
            Message: null
        },
    ],
    img,
    where: 'Главный корпус А-128',
    time: '11:28',
    qr,
}