import {Subject} from "rxjs";

type Subscriber = (...args: any[]) => any
type Unsubscribe = () => void

class EventEmitter {
    events: Map<string, Subject<any>>

    constructor() {
        this.events = new Map<string, Subject<any>>()
    }

    on(eventName: string, subscriber: Subscriber):Unsubscribe {
        let sub = undefined

        if (!this.events.has(eventName)) {
            this.events.set(eventName, new Subject())
        }

        sub = this.events.get(eventName).subscribe(subscriber)

        return () => {
            sub.unsubscribe()
        }
    }

    emit(eventName: string, ...params: any[]) {
        if (this.events.has(eventName)) {
            //@ts-ignore
            this.events.get(eventName).next(...params)

            return
        }

        console.log(`Error: ${eventName}, event dont exist`)
    }
}

export default new EventEmitter()