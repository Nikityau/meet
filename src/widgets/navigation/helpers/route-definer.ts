import {AppRoutes} from "../../../shared/app-routes";

interface RD {
    [route: string]: string[]
}

export class RouteDefiner {
    routes: RD = {
        affiche: [
            AppRoutes.AFFICHE,
            AppRoutes.EVENT,
        ],
        archive: [
            AppRoutes.ARCHIVE
        ],
    }

    define(route: string): string {
        if(route.includes(AppRoutes.ARCHIVE)) {
            return AppRoutes.ARCHIVE
        }


        return AppRoutes.AFFICHE
    }
}