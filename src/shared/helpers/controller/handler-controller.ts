export interface IHandlerController<K, V> {
    isUseSimilarKey: boolean

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
    isUseSimilarKey: boolean = false

    handlers: Map<K, V>

    constructor() {
        this.handlers = new Map<K, V>()
    }

    invoke(key: K): number {
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
    constructor(isUseSimilarKey: boolean) {
        super();
        this.isUseSimilarKey = isUseSimilarKey
    }

    findSimilarKey(key: K): K | null {
        const keys = this.handlers.keys()
        const inputKey = key.toString()
        const similarKey = inputKey.substring(0, inputKey.substring(1).indexOf('/') + 1)

        const arr = Array.from(keys)
        for(let k of arr) {
            if(k == similarKey)
                return k
        }

        return null
    }

    invoke(key: K): number | undefined {
        if(!this.handlers.has(key)) {
            if(this.isUseSimilarKey) {
                const similarKey = this.findSimilarKey(key)
                if(!similarKey) {
                    console.error(`EventHandler: similar key ${key} does not find`)
                    return
                }

                return this.invoke(similarKey)
            }

            console.error(`EventHandler: handler with key ${key} does not exist`)
            return
        }

        return this.handlers.get(key).getOffset()
    }
}
