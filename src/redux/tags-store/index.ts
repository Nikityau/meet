import {v4} from "uuid";

export interface TagState {
    id: string,
    tag: string
}

const tags: TagState[] = [
    {
        id: v4(),
        tag: 'IT'
    },
    {
        id: v4(),
        tag: 'Встречи'
    },
    {
        id: v4(),
        tag: 'Выставки'
    },
    {
        id: v4(),
        tag: 'Игровые'
    },
    {
        id: v4(),
        tag: 'Концерты'
    },
    {
        id: v4(),
        tag: 'Обучение'
    },
    {
        id: v4(),
        tag: 'Спортивные'
    },
    {
        id: v4(),
        tag: 'Спектакли'
    },
    {
        id: v4(),
        tag: 'Экскурсии'
    },
    {
        id: v4(),
        tag: 'Конкурсы'
    },
    {
        id: v4(),
        tag: 'Соревнования'
    },
]

export const tagsReducer = (state: TagState[] = tags) => {
    return state
}