import {useEffect, useReducer, useState} from "react";

import {CreateEventController} from "../../controller/create-post.controller";
import {useCreatePost} from "../../zustand";

export type ChangeEvent =
    'title' |
    'wrapper' |
    'description' |
    'next' |
    'finish';


const controller = new CreateEventController()

export const useCreateEvent = () => {

    const zustand = useCreatePost()

    useEffect(() => {
        controller.setZustand(zustand)
    }, [zustand])

    useEffect(() => {
        controller.savePostToLocal()
    }, [zustand.currentStage, zustand.post])

    return {
        change: controller.change.bind(controller)
    }
}