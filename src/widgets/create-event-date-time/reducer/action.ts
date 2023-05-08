import {CreateDateAction, CreateDateActionTypes} from "./type";

export function addChosenDate(date: Date, dispatch: any): CreateDateAction {
    return {
        type: CreateDateActionTypes.ADD_CHOSEN_DATE,
        payload: {
            value: date,
            dispatch
        }
    }
}

export function removeChosenDate(date: Date, dispatch: any): CreateDateAction {
    return {
        type: CreateDateActionTypes.REMOVE_CHOSEN_DATE,
        payload: {
            value: date,
            dispatch
        }
    }
}

export function setTime(time: any, dispatch): CreateDateAction {
    return {
        type: CreateDateActionTypes.SET_TIME,
        payload: {
            value: time,
            dispatch
        }
    }
}