import {IComment} from "../../../entities/comment/data/IComment";
import {v4} from "uuid";
import {ArchiveData} from "../../../entities/archive-event/data/archive-data";

import org_img from '../assets/org.png'
import com_img from '../assets/com.png'
import ev_img from '../assets/ev.png'

export interface ArchiveRes extends ArchiveData {
    likesCount: number,
    sharesCount: number,
    commentsCount: number,
    viewCount: number,
    tags: string[],
    comments: IComment[]
}

export const archiveResData: ArchiveRes[] = [
    {
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
        date: new Date,
        time: '11:00',
        location: 'A128',
        images: [
            ev_img,
            ev_img,
            ev_img,
            ev_img,
        ],
        orgImage: org_img,
        tags: [
            'IT',
            'Обучение'
        ],
        likesCount: 2300,
        sharesCount: 150,
        viewCount: 15300,
        commentsCount: 20,
        comments: [
            {
                id: v4(),
                comment: 'Крутой лекция, крутой лектор! Было очень интересно!',
                userImage: com_img,
                userName: 'Vera',
                userSurname: 'Broun'
            },
            {
                id: v4(),
                comment: 'Крутой лекция, крутой лектор! Было очень интересно!',
                userImage: com_img,
                userName: 'Vera',
                userSurname: 'Broun'
            },
            {
                id: v4(),
                comment: 'Крутой лекция, крутой лектор! Было очень интересно!',
                userImage: com_img,
                userName: 'Vera',
                userSurname: 'Broun'
            },
        ]
    },
    {
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
        date: new Date,
        time: '11:00',
        location: 'A128',
        images: [
            ev_img,
            ev_img,
            ev_img,
            ev_img,
        ],
        orgImage: org_img,
        tags: [
            'IT',
            'Обучение',
            'Обучение',
            'Обучение',
            'Обучение',
            'Обучение',
            'Обучение',
            'Обучение',
            'Обучение',
        ],
        likesCount: 2300,
        sharesCount: 150,
        viewCount: 15300,
        commentsCount: 20,
        comments: [
            {
                id: v4(),
                comment: 'Крутой лекция, крутой лектор! Было очень интересно!',
                userImage: com_img,
                userName: 'Vera',
                userSurname: 'Broun'
            },
            {
                id: v4(),
                comment: 'Крутой лекция, крутой лектор! Было очень интересно!',
                userImage: com_img,
                userName: 'Vera',
                userSurname: 'Broun'
            },
            {
                id: v4(),
                comment: 'Крутой лекция, крутой лектор! Было очень интересно!',
                userImage: com_img,
                userName: 'Vera',
                userSurname: 'Broun'
            },
        ]
    },
    {
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
        date: new Date,
        time: '11:00',
        location: 'A128',
        images: [
            ev_img,
            ev_img,
            ev_img,
            ev_img,
        ],
        orgImage: org_img,
        tags: [
            'IT',
            'Обучение'
        ],
        likesCount: 2300,
        sharesCount: 150,
        viewCount: 15300,
        commentsCount: 20,
        comments: [
            {
                id: v4(),
                comment: 'Крутой лекция, крутой лектор! Было очень интересно!',
                userImage: com_img,
                userName: 'Vera',
                userSurname: 'Broun'
            },
            {
                id: v4(),
                comment: 'Крутой лекция, крутой лектор! Было очень интересно!',
                userImage: com_img,
                userName: 'Vera',
                userSurname: 'Broun'
            },
            {
                id: v4(),
                comment: 'Крутой лекция, крутой лектор! Было очень интересно!',
                userImage: com_img,
                userName: 'Vera',
                userSurname: 'Broun'
            },
        ]
    },
]