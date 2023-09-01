import {ArchiveRes} from "../../archive/data/arch";
import {v4} from "uuid";

import img from '../assets/img.png'
import im2 from '../assets/img2.png'
import ev2 from '../assets/ev2.png'
import com_img from "../../archive/assets/com.png";

interface IOrg {
    id: string,
    name: string,
    surname: string,
    role: string,
    img: string
}

interface IEvent extends ArchiveRes{
    org: IOrg,
    img: string,
}

export const event: IEvent = {
    id: v4(),
    img: ev2,
    title: 'Современная архитектура веб приложений',
    description: 'В Центре IT-Притяжения РГУПС пройдет научно-популярная лекция для всех желающих студентов, на тему «Современная архитектура веб приложений»\n' +
        '\n' +
        'Лекцию читает к.т.н. доцент кафедры «Вычислительная техника и автоматизированные системы управления» Капкаев Андрей Андреевич.\n' +
        '\n\n\n' +
        'Лекция будет проходить в режиме диалога, когда каждый может задать любой вопрос, ответ на который формирует совместно ребята и педагог.\n' +
        '\n' +
        'Студенты ознакомиться с элементами, системами, используемыми при построении современных веб приложений, популярными и наиболее востребованными в информационных компаниях технологиями веба.\n' +
        '\n',
    date: new Date(),
    time: '11:00',
    location: 'A128',
    images: [
        img,
        img,
        img,
        img,
    ],
    tags: [
        'Обучение',
        'IT'
    ],
    likesCount: 2300,
    sharesCount: 200,
    viewCount: 15400,
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
    ],
    orgImage: null,
    org: {
        id: v4(),
        img: im2,
        role: 'преподаватель',
        name: 'Андрей',
        surname: 'Капкаев'
    }
}