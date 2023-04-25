import {HandlerController} from "shared/helpers/controller/handler-controller";
import {INewEvent} from "../zustand";

export class CreatePostController<V> extends HandlerController<string, V>{
    constructor() {
        super();
    }

    post: INewEvent = null

    next: (...args: any[]) => any

    nextStage() {

    }
}