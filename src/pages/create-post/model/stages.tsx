import {v4} from 'uuid'
import React from "react";

import CreateTitle from "../ui/create-title";
import CreateWrapper from "../ui/create-wrapper";


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
    },
    {
        id: v4(),
        number: 2,
        Element: <CreateWrapper/>
    }
]