import {IElOffsetHandler} from "shared/helpers/controller/handler-controller";

export class MonthController implements IElOffsetHandler {
    el: HTMLElement
    isAddonOffset: boolean;

    constructor() {
        this.isAddonOffset = false
    }


    setEl(el: HTMLElement) {
        this.el = el
    }


    getOffset(): number {
        const offset = this.el.offsetLeft + this.el.clientWidth / 2

        return offset
    }
}