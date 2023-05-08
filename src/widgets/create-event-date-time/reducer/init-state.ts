export type DateState = {
    time: string,
    currentDate: Date,
    chosenDates: Date[]
}


export const dateState: DateState = {
    time: "11:00",
    currentDate: new Date(Date.now()),
    chosenDates: [

    ]
}