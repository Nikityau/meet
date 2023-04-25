import {v4} from 'uuid'
import React from "react";

import CreateTitle from "../ui/create-title";


interface IStages {
    id: string,
    number: number,
    Element: React.ReactNode
}

export const stagesComp: IStages[] = [
    {
        id: v4(),
        number: 1,
        Element: <CreateTitle/>
    }
]