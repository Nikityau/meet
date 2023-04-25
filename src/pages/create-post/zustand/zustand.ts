import {create} from "zustand";

import type {ICreatePost} from "./type";

export const useCreatePost = create<ICreatePost>(set => ({
    post: null,
    currentStage: 1,
    maxStage: 9,
    nextStage: () => {}
}))