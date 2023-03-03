import {nanoid} from "nanoid";

import every_img from '../assets/filter-icon/every.png'
import study from '../assets/filter-icon/study.png'

export const dataFilter = [
    {
        id: nanoid(),
        filter: 'every',
        title: 'Для всех',
        icon: every_img
    },
    {
        id: nanoid(),
        filter: 'staff&students',
        title: 'Для всех студунтов и сотрудников',
        icon: study
    },
]