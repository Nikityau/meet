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
        const ks = Object.keys(this.routes)

        for(let k of ks) {
            if(route.includes(k)) {
                return k
            }
        }

        return AppRoutes.AFFICHE
    }
}