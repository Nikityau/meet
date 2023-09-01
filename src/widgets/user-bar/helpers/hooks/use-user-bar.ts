import React, {useState} from "react";
import {useWinClose} from "../../../../shared/helpers/hooks/useWinClose";

export const useUserBar = () => {
    const [isBarOpen, setIsBarOpen] = useState(false)
    const [mouseBarPos, setMouseBarPos] = useState<'in' | 'out'>('out')

    useWinClose({
        className: 'user-circle',
        watchParams: [isBarOpen, mouseBarPos],
        closeCb: () => {
            if(mouseBarPos == 'in') return

            setIsBarOpen(false)
        }
    })

    const onHMouseBarPos = (pos: 'in' | 'out') => {
        setMouseBarPos(pos)
    }

    const onCircleClick = () => {
        setIsBarOpen(prev => !prev)
    }


    return {
        state: {
            isBarOpen,
            mouseBarPos
        },
        f: {
            onHMouseBarPos,
            onCircleClick,
        }
    }
}

