import {AppRoutes} from "shared/routes/routes";
class HistoryController {
    current: string = ''
    history: string[] = []

    setBase(location: any) {
        this.current = location
        this.history = []
    }

    setCurrent(location: any, user: Object) {
        if (location == AppRoutes.EVENTS) {
            this.current = location
            this.history = []
        }

        if (location == this.current) {
            return
        }

        const prev = this.current

        let list = this.history


        list.push(prev)

        this.current = location
        this.history = list
    }

    goPrev() {
        const list = this.history

        if (list.length <= 1) {
            this.current = AppRoutes.EVENTS
            this.history = []

            return this.current
        }

        const last = list[list.length - 1]

        list.pop()

        this.current = last
        this.history = list

        return this.current
    }
    getInfo() {
        console.log(this.current, this.history)
    }
}

export const controller = new HistoryController()