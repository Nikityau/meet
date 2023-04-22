import {create} from "zustand";
import {EventData} from "../ui";
import {stateEvent} from "../model/state";


interface EventDataZus {
    event: EventData
}

export const useEventData = create<EventDataZus>(set => ({
    event: stateEvent
}))