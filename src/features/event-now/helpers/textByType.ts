import {neverCheck} from "shared/helpers/never-check";

export const textByType = (type:'all' | 'staff'): string => {
    switch (type) {
        case "all":
            return 'ДЛЯ ВСЕХ'
        case "staff":
            return 'ДЛЯ СТУДЕНТОВ И СОТРУДНИКОВ'
        default:
            neverCheck(type)
    }
}