import {EventType} from "shared/helpers/types/event";
import {neverCheck} from "shared/helpers/never-check";

export const classByType = (type:EventType): string => {
    switch (type) {
        case "all":
            return 'events-now__type_all'
        case "staff":
            return 'events-now__type_staff'
        default:
            neverCheck(type)
    }
}