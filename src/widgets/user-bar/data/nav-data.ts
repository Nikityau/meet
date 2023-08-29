import {v4} from 'uuid'
import {AppRoutes} from "../../../shared/app-routes";

import settings_img from '../assets/settings.png'
import about_img from '../assets/about.png'
import change_acc_img from '../assets/change-acc.png'
import discord_img from '../assets/discord.png'
import exit_img from '../assets/exit.png'
import help_img from '../assets/help.png'
import lock_img from '../assets/lock.png'
import e_mail_img from '../assets/e-mail.png'

export type NavData = {
    id: string,
    icon: string,
    text: string,
    link: string,
    withArrow?: boolean
}

export const navData: NavData[][] = [ 
    [
        {
            id: v4(),
            icon: settings_img,
            text: 'Настройки',
            link: AppRoutes.SETTINGS
        },
        {
            id: v4(),
            icon: change_acc_img,
            text: 'Сменить аккаунт',
            link: AppRoutes.CHANGE_ACC,
            withArrow: true
        },
        {
            id: v4(),
            icon: exit_img,
            text: 'Выйти',
            link: AppRoutes.LOGOUT,
            withArrow: true
        },
        {
            id: v4(),
            icon: about_img,
            text: 'О Meet',
            link: `/${AppRoutes.MEET}/${AppRoutes.ABOUT}`
        },
        {
            id: v4(),
            icon: help_img,
            text: 'Помощь',
            link: AppRoutes.HELP
        }
    ],
    [
        {
            id: v4(),
            icon: e_mail_img,
            text: 'E-mail',
            link: AppRoutes.E_MAIL
        },
        {
            id: v4(),
            icon: discord_img,
            text: 'discord',
            link: AppRoutes.DISCORD
        } 
    ],
    [
        {
            id: v4(),
            icon: lock_img,
            text: 'conf',
            link: AppRoutes.CONF
        }
    ]
]