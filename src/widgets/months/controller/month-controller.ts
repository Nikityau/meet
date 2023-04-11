export interface IMonthController {
    el:HTMLElement

    offset(): number
    setEl(el: HTMLElement)
}

export class MonthController implements IMonthController {
    el: HTMLElement

    offset(): number {
        const offset = this.el.offsetLeft + this.el.clientWidth / 2

        return offset
    }

    setEl(el: HTMLElement) {
        this.el = el
    }
}