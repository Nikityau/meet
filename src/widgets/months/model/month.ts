import {nanoid} from "nanoid";

type MonthName =
    'Январь' |
    'Февраль' |
    'Март' |
    'Апрель' |
    'Май' |
    'Июнь' |
    'Июль' |
    'Август' |
    'Сентябрь' |
    'Октябрь' |
    'Ноябрь' |
    'Декабрь'


type Month = {
    id: string,
    number: number,
    title: MonthName
}

export const data: Month[] = []

const getTitleByNum = (num: number): MonthName => {
    switch (num) {
        case 0: return 'Январь'
        case 1: return 'Февраль'
        case 2: return 'Март'
        case 3: return 'Апрель'
        case 4: return 'Май'
        case 5: return 'Июнь'
        case 6: return 'Июль'
        case 7: return 'Август'
        case 8: return 'Сентябрь'
        case 9: return 'Октябрь'
        case 10: return 'Ноябрь'
        case 11: return 'Декабрь'
    }
}

const createDateArr = () => {
    Array.from({length: 12}).forEach((el, index) => {
        data.push({
            id: nanoid(),
            title: getTitleByNum(index),
            number: index
        })
    })
}

createDateArr()
