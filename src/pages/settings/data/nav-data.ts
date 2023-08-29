import {v4} from "uuid";

import profile_img from '../assets/profile2.png'
import lock_img from '../assets/lock2.png'
import notif_img from '../assets/notification2.png'
import stars_img from '../assets/stars2.png'

interface SettingNav {
    id: string,
    name: string,
    link: string,
    icon: string,
}

export const settingsNav: SettingNav[] = [
    {
        id: v4(),
        link: 'profile',
        name: 'Профиль',
        icon: profile_img
    },
    {
        id: v4(),
        link: 'security',
        name: 'Безопасность',
        icon: lock_img
    },
    {
        id: v4(),
        link: 'view',
        name: 'Внешний вид',
        icon: stars_img
    },
    {
        id: v4(),
        link: 'notification',
        name: 'Уведомления',
        icon: notif_img
    }
]