export class CreateTextService implements IEventStageService {
    check(value: any): boolean {
        if(typeof value == 'string') {
            return false
        }

        return true
    }

}