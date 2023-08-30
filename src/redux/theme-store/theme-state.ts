export type MainColor = 'black' | 'white'
export type AdditionalColor = 'purple' | 'yellow' | 'grey'

export interface ThemeState {
    mainColor: MainColor
    additionalColor: AdditionalColor
}

export const themeState: ThemeState = {
    mainColor: 'white',
    additionalColor: 'purple'
}