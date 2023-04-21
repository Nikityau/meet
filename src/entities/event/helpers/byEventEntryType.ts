import {EventEntryType} from "shared/type/event.type";
import {neverCheck} from "shared/helpers/never-check";

export const getTextByEntryType = (type:EventEntryType):string => {
    switch (type) {
        case "all":
            return "для всех"
        case "staff":
            return "Для студентов и сотрудников"
        default:
            neverCheck(type)
    }
}

export const getClassByEntryType = (type:EventEntryType):string => {
    switch (type) {
        case "all":
            return "event-card__type_all"
        case "staff":
            return "event-card__type_staff"
        default:
            neverCheck(type)
    }
}