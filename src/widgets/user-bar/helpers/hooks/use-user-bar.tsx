import React, {useEffect, useState} from "react";
import {v4} from "uuid";
import {NavData} from "../../data/nav-data";
import NavPanel from "../../ui/nav-panel";
import SepLine from "../../ui/user-nav/sep-line";

export const useUserBar = () => {
    const [isBarOpen, setIsBarOpen] = useState(false)
    const [mouseBarPos, setMouseBarPos] = useState<'in' | 'out'>('out')

    useEffect(() => {
        const closeBar = (e: globalThis.MouseEvent) => {
            const target = e.target as HTMLDivElement

            if (target.classList.contains('user-circle') ||
                mouseBarPos == 'in'
            ) {
                return
            }

            setIsBarOpen(prev => {
                if (prev) {

                }

                if (prev == false) {
                    return prev
                }

                return !prev
            })
        }

        window.addEventListener('click', closeBar)

        return () => {
            window.removeEventListener('click', closeBar)
        }
    }, [isBarOpen, mouseBarPos])

    const onHMouseBarPos = (pos: 'in' | 'out') => {
        setMouseBarPos(pos)
    }

    const onCircleClick = () => {
        setIsBarOpen(prev => !prev)
    }

    const genNavPanel = (arr: NavData[][]): JSX.Element[] => {
        const jsx: JSX.Element[] = []

        for (let i = 0; i < arr.length; ++i) {
            for (let j = 0; j < arr[i].length; ++j) {
                const navEl = arr[i][j]
                jsx.push(
                    <NavPanel
                        icon={navEl.icon}
                        text={navEl.text}
                        key={navEl.id}
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


    return {
        state: {
            isBarOpen,
            mouseBarPos
        },
        f: {
            onHMouseBarPos,
            onCircleClick,
            genNavPanel
        }
    }
}