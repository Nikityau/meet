type DateType = {
    time: string,
    dates: Date[]
}

function isDateType(dateObj: any | DateType): dateObj is DateType {
    if ('time' in dateObj && 'dates' in dateObj) {
        return true
    }

    return false
}

export class CreateDateService implements IEventStageService {
    checkError(value: any): boolean {
        if (!isDateType(value)) {
            console.log('??',value)
            return true
        }

        if (value.time.length == 0 || value.dates.length == 0) {
            return true
        }

        return false

    }
}