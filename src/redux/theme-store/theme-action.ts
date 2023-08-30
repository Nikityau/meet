import {ReduxAction} from "../default/redux-action";

export enum ThemeActionTypes {
    MAIN = 'theme/setMain',
    ADDITIONAL = 'theme/setAdditional',
    ALL = 'theme/setAll',
    SWITCH = 'theme/switch'
}

export interface ThemeAction extends ReduxAction<ThemeActionTypes, any> {

}
