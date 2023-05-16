type DateType = {
    time: string,
    dates: Date[]
}

function isDateType(dateObj: any | DateType): dateObj is DateType {
    if(!dateObj) return false

    if ('time' in dateObj && 'dates' in dateObj) {
        return true
    }

    return false
}

export class CreateDateService implements IEventStageService {
    checkError(value: any): boolean {
        if (!isDateType(value)) {
            return true
        }

        if (value.time.length == 0 || value.dates.length == 0) {
            return true
        }

        return false

    }
}