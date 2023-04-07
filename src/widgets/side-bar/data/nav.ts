import {nanoid} from "nanoid";

import {AppRoutes} from "shared/routes/routes";

export const navData: {
    id: string,
    className: string,
    link: AppRoutes,
    title: string,
}[] = [
    {
        id: nanoid(),
        className: 'events-icon',
        link: AppRoutes.EVENTS,
        title: 'Афиша'
    },
    {
        id: nanoid(),
        className: 'archive-icon',
        link: AppRoutes.ARCHIVE,
        title: 'Архив'
    },
    {
        id: nanoid(),
        className: 'chosen-icon',
        link: AppRoutes.CHOSEN,
        title: 'Избранное'
    },
]