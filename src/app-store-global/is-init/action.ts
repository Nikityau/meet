export enum InitTypes {
    APP_INIT = "init/app-init",
    APP_NOT_INIT = "init/app-not-init"
}


export type InitAction = {
    type: InitTypes
}

export const appInit = (): InitAction => {
    return {
        type: InitTypes.APP_INIT
    }
}
export const appNotInit = (): InitAction => {
    return {
        type: InitTypes.APP_NOT_INIT
    }
}