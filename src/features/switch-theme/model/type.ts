import {Action} from 'redux'

export type ThemeState = {
    color: 'LIGHT' | 'DARK',
    type: 'BASE'
}

export enum ThemeActionTypes {
    SWITCH_COLOR = 'theme/switch-color',
    CHANGE_TYPE = 'theme/change-type'
}

export type ThemeAction = {
    type: ThemeActionTypes,
    payload: any
} & Action