import {v4} from 'uuid'

export type NavData = {
    id: string,
    icon: string,
    text: string
}

export const navData: NavData[][] = [ 
    [
        {
            id: v4(),
            icon: '',
            text: 'settings'
        },
        {
            id: v4(),
            icon: '',
            text: 'change account'
        },
        {
            id: v4(),
            icon: '',
            text: 'logout'
        },
        {
            id: v4(),
            icon: '',
            text: 'about'
        },
        {
            id: v4(),
            icon: '',
            text: 'help'
        }
    ],
    [
        {
            id: v4(),
            icon: '',
            text: 'e-mail'
        },
        {
            id: v4(),
            icon: '',
            text: 'discord'
        } 
    ],
    [
        {
            id: v4(),
            icon: '',
            text: 'conf'
        }
    ]
]