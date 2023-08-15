
// лень думать, будет только для кеса
export const toShortNum = (num: number): string => {
    if(num < 1000) return num.toString()

    return `${Math.trunc(num / 1000)}.${(num % 1000).toString()[0]}K`
}