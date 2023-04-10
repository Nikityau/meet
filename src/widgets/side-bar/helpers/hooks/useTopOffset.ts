import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {AppRoutes} from "../../../../shared/routes/routes";

export const useTopOffset = () => {
    const [offset, setOffset] = useState<number>(0)

    const location = useLocation()

    useEffect(() => {
        posByLocation()
    }, [location])

    const getElByLocation: HTMLElement | any = () => {
        switch (location.pathname) {
            case AppRoutes.CHOSEN:
                return document.querySelector('[data-name="chosen-nav-el"]')
            case AppRoutes.ARCHIVE:
                return document.querySelector('[data-name="archive-nav-el"]')
            case AppRoutes.SETTINGS:
                return document.querySelector('[data-name="setting-nav-el"]')
            case AppRoutes.EVENTS:
                return document.querySelector('[data-name="events-nav-el"]')
            case AppRoutes.ADD_POST:
                return document.querySelector('.add-post-btn')
            default:
                return null
        }
    }

    const posByLocation = () => {
        let el: HTMLElement = getElByLocation()

        if (!el) {
            return
        }

        const attr = el.getAttribute('data-is-need-addon-offset')

        let offset = 0
        let matrix = undefined

        if (attr == 'true') {
            const parent = el.offsetParent
            const style = getComputedStyle(parent)
            matrix = new WebKitCSSMatrix(style.transform)
        } else {
            const style = getComputedStyle(el)
            matrix = new WebKitCSSMatrix(style.transform)
        }

        offset = el.offsetTop + el.clientHeight / 2 + matrix.f
        setOffset(offset)
    }

    const onElClick = (el: HTMLElement) => {

    }

    return {
        offset,
        onElClick
    }
}