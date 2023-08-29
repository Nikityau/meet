import React, {useEffect, useState} from "react";

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

