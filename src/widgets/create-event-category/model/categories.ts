import {v4} from "uuid";

type Category = {
    id: string,
    category: string
}

export const categoriesData: Category[] = [
    {
        id: v4(),
        category: 'IT'
    },
    {
        id: v4(),
        category: 'Встречи'
    },
    {
        id: v4(),
        category: 'Выставки'
    },
    {
        id: v4(),
        category: 'Коцерты'
    },
    {
        id: v4(),
        category: 'Обучение'
    },
    {
        id: v4(),
        category: 'Спортивные'
    },
    {
        id: v4(),
        category: 'Экскурсии'
    },
    {
        id: v4(),
        category: 'Конкурсы'
    },
    {
        id: v4(),
        category: 'Соревнования'
    },
    {
        id: v4(),
        category: 'Игровые'
    },
    {
        id: v4(),
        category: 'Спектакли'
    },
]