export enum DateActionTypes {
    CHOOSE_MONTH = 'date/choose-month',
    CHOOSE_DATE = 'date/choose-date'
}


export type DateAction = {
    type: DateActionTypes,
    payload: number | Date
}

export const chooseMonth = (month: number): DateAction => ({
    type: DateActionTypes.CHOOSE_MONTH,
    payload: month
})

export const chooseDate = (date: Date): DateAction => ({
    type: DateActionTypes.CHOOSE_DATE,
    payload: date
})