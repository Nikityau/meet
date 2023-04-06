export const neverCheck = (param: never) => {
    console.log(`Here must be never, but ${param}`)
}