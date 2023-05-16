export class CreateCategoryService implements IEventStageService {
    checkError(value: any): boolean {
        if(!value) return true
        if(Array.isArray(value) && value.length == 0) {
            return true
        }

        return false
    }
}