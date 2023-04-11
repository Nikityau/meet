import {IMonthController} from "./month-controller";

export class MonthsController {
    links:Map<number, IMonthController>

    constructor() {
        this.links = new Map<number, IMonthController>()
    }

    push(key: number, controller: IMonthController) {
       if(this.links.has(key)) {
           console.error(key)
       } else {
           this.links.set(key, controller)
       }
    }

    leftOffset(key: number): number {
        if(!this.links.has(key)) {
            return
        }

        const offset = this.links.get(key).offset()

        return offset
    }
}