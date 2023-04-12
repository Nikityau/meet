export interface IHandlerController<K, V> {
    handlers: Map<K, V>

    push(key: K, value: V): any
    invoke(key: K): any
}

export interface IElOffsetHandler {
    el: HTMLElement
    isAddonOffset: boolean


    getOffset():number
    setEl(el: HTMLElement)
}

export class HandlerController<K, V> implements IHandlerController<K, V> {
    handlers: Map<K, V>

    constructor() {
        this.handlers = new Map<K, V>()
    }

    invoke(key: K) {
        if(!this.handlers.has(key)) {
            console.error(`EventHandler: handler with key ${key} does not exist`)
            return
        }
    }

    push(key: K, value: V) {
        if(this.handlers.has(key)) {
            console.error(`EventHandler: handler with key ${key} already exist`)
            return
        }

        this.handlers.set(key, value)
    }
}


export class HandlerOffsetController<K> extends HandlerController<K, IElOffsetHandler> {
    invoke(key: K) {
        if(!this.handlers.has(key)) {
            console.error(`EventHandler: handler with key ${key} does not exist`)
            return
        }

        return this.handlers.get(key).getOffset()
    }
}
