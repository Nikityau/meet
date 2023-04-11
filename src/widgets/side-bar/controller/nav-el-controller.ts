export interface NavElC {
    el: HTMLElement
    isAddonOffset: boolean


    getTopOffset():number
    setEl(el: HTMLElement)
}

export class NavElController implements NavElC {
    el: HTMLElement = undefined
    isAddonOffset: boolean = false

    constructor(isAddonOffset: boolean) {
        this.isAddonOffset = isAddonOffset
    }


    getTopOffset() {
        let offset = 0;
        let matrix;

        if(this.isAddonOffset) {
            const parent = this.el.offsetParent
            const style = getComputedStyle(parent)
            matrix = new WebKitCSSMatrix(style.transform)
        } else {
            const style = getComputedStyle(this.el)
            matrix = new WebKitCSSMatrix(style.transform)
        }

        offset = this.el.offsetTop + this.el.clientHeight / 2 + matrix.f

        return offset
    }

    setEl(el: HTMLElement) {
        this.el = el
    }
}