import {nanoid} from "nanoid";

import {AppRoutes} from "shared/routes/routes";

export const navData: {
    id: string,
    className: string,
    link: AppRoutes,
    title: string,
    name: string
}[] = [
    {
        id: nanoid(),
        className: 'events-icon',
        link: AppRoutes.EVENTS,
        title: 'Афиша',
        name: 'events-nav-el'
    },
    {
        id: nanoid(),
        className: 'archive-icon',
        link: AppRoutes.ARCHIVE,
        title: 'Архив',
        name: 'archive-nav-el'
    },
    {
        id: nanoid(),
        className: 'chosen-icon',
        link: AppRoutes.CHOSEN,
        title: 'Избранное',
        name: 'chosen-nav-el'
    },
]