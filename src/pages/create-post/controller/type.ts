import {ChangeEvent} from "../helpers/hooks/useCreateEvent";

export interface ICreatePostContext {
    change: (key: ChangeEvent, value: any) => void
}
