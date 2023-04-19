import {create} from "zustand";

export const useAppLocationStore = create(set => ({
    current: '',
    prev: '',
    setCurrent: (location: string) => set(state => {
        return {
            prev: state.current,
            current: location,
        }
    }),
    setPrev: (location: string) => set(state =>{
        return {
            current: state.current,
            prev: location
        }
    })
}))