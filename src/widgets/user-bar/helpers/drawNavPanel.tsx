import {NavData} from "../data/nav-data";
import NavPanel from "../ui/nav-panel";
import SepLine from "../ui/user-nav/sep-line";
import {v4} from "uuid";
import React from "react";

export const genNavPanel = (arr: NavData[][]): JSX.Element[] => {
    const jsx: JSX.Element[] = []

    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr[i].length; ++j) {
            const navEl = arr[i][j]
            jsx.push(
                <NavPanel
                    icon={navEl.icon}
                    text={navEl.text}
                    key={navEl.id}
                    link={navEl.link}
                    withArrow={navEl.withArrow}
                />
            )
        }

        if (i + 1 != arr.length)
            jsx.push(
                <SepLine key={v4()}/>
            )
    }

    return jsx
}