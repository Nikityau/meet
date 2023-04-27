import {create} from "zustand";
import produce from "immer";

import type {ICreatePost, INewEvent} from "./type";

export const useCreatePost = create<ICreatePost>((set, getState, store) => ({
    post: {
        title: null,
        date: null,
        image: null,
        time: null,
        categories: null,
        description: null,
        location: null,
        feedback: null
    },
    error: null,
    currentStage: 1,
    maxStage: 9,
    setPostTitle: (title: string) => set(
        produce(draft => {
            if (!draft.post) {
                draft.post = {}
            }

            draft.post.title = title

            return draft
        })
    ),
    setNextStage: () => set(
        produce(draft => {
            if (draft.currentStage != draft.maxStage)
                draft.currentStage = getState().currentStage + 1

            return draft
        })
    ),
    setError: (key: string, descr: string) => set(
        produce(draft => {
            if(!draft.error) {
                draft.error = []
            }

            if(draft.error.find(el => {
                return el.key == key
            })) {
                return draft
            }

            draft.error.push({
                key,
                description: descr
            })

            return draft
        })
    ),
    removeError: (key: string) => set(
        produce(draft => {
            if(!draft.error || draft?.length == 0) {
                return draft
            }

            draft.error = draft.error.filter(err => {
                return err.key != key
            })

            if(draft.error.length == 0) {
                draft.error = null
            }


            return draft
        })
    ),
    setFullPost: (post: INewEvent) => set(
        produce(draft => {
            console.log(post)
            draft.post = post

            return draft
        })
    ),
    setStage: (stage: number) => set(
        produce(getState(),draft => {
            draft.currentStage = stage

            return draft
        })
    ),
    setImage: (image: any) => set(
        produce(getState(), draft => {
            draft.post.image = image

            return draft
        })
    )
}))