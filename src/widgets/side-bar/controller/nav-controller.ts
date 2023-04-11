import type {Location} from 'react-router-dom'


import {AppRoutes} from "shared/routes/routes";

import {NavElC} from "./nav-el-controller";

export class NavController {
    links:Map<AppRoutes, NavElC>

    constructor() {
        this.links = new Map<AppRoutes, NavElC>()
    }

    push(key: AppRoutes, controller: NavElC) {
        if(this.links.has(key)) {
            console.log('nav el controller')
        } else {
            this.links.set(key, controller)
        }

        console.log(key, controller)
    }

    posByLocation(location: Location): number {
        if(!this.links.has(location.pathname as AppRoutes)) {
            console.error('this location does not exist', location)

            return
        }

        const topOffset = this.links.get(location.pathname as AppRoutes).getTopOffset()

        return topOffset
    }

}