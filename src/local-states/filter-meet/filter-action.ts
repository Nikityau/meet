export type FilterActionTypes  =
    "filterMeet/dates-add" |
    "filterMeet/dates-remove" |
    "filterMeet/tags-add" |
    "filterMeet/tags-remove" |
    "filterMeet/clear"


export interface FilterAction {
    type: FilterActionTypes,
    payload: any
}