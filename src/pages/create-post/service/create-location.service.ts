export class CreateLocationService implements IEventStageService {
    checkError(value: any): boolean {
        if(typeof value == 'string' && value.length > 0) {
            return false
        }

        return true
    }
}