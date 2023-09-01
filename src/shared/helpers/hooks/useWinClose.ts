import {useEffect} from "react";

type UseWinCloseProps = {
    watchParams: any[]
    className: string
    closeCb: () => void
}

export const useWinClose = ({closeCb, watchParams, className}: UseWinCloseProps) => {
    useEffect(() => {
        const onClose = (e: MouseEvent) => {
            const t = e.target as HTMLDivElement

            if(t.classList.contains(className)) {
                return
            }

            closeCb()
        }

        window.addEventListener('click', onClose)

        return () => {
            window.removeEventListener('click', onClose)
        }
    }, [...watchParams])
}