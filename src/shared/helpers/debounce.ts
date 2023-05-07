export function debounce(cb, delay) {
    let key = null

    return (...args) => {
        if(key) {
            clearTimeout(key)
        }

        key = setTimeout(() => {
            cb(...args)
            clearTimeout(key)
            key = null
        }, delay)
    }
}