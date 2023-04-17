import {IElOffsetHandler} from "shared/helpers/controller/handler-controller";

export class ElOffsetHandler implements IElOffsetHandler {
    el: HTMLElement;
    isAddonOffset: boolean;

    constructor(isAddon: boolean) {
        this.isAddonOffset = isAddon
    }

    getOffset(): number {
        let offset = 0;
        let matrix;

        if(this.isAddonOffset) {
            const parent = this.el.offsetParent
            const style = getComputedStyle(parent)
            matrix = new WebKitCSSMatrix(style.transform)
            offset += parent['offsetTop']
        } else {
            const style = getComputedStyle(this.el)
            matrix = new WebKitCSSMatrix(style.transform)
        }

        offset += this.el.offsetTop + this.el.clientHeight / 2 + matrix.f

        return offset
    }

    setEl(el: HTMLElement) {
        this.el = el
    }

}