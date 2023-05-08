export enum CreateDateActionTypes {
    ADD_CHOSEN_DATE = 'createDate/addChosenDate',
    REMOVE_CHOSEN_DATE = 'createDate/removeChosenDate',
    SET_TIME = 'createDate/setTime'
}

export type CreateDateAction = {
    type: CreateDateActionTypes,
    payload: {
        value: any,
        dispatch: any
    }
}