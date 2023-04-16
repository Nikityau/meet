import {neverCheck} from "shared/helpers/never-check";
import {EventType} from "shared/helpers/types/event";

export const textByType = (type:'all' | 'staff'): string => {
    switch (type) {
        case "all":
            return 'Для всех'
        case "staff":
            return 'Для студентов и сотрудников'
        default:
            neverCheck(type)
    }
}

export const classByType = (type:EventType): string => {
    switch (type) {
        case "all":
            return 'events-soon__type_all'
        case "staff":
            return 'events-soon__type_staff'
        default:
            neverCheck(type)
    }
}