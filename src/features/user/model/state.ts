import {UserState} from "./type";

import {nanoid} from "nanoid";

import user_img from '../assets/user.png'

export const userState: UserState = {
    id: nanoid(),
    name: 'Evelin',
    surname: 'Parker',
    avatar: user_img,
    birth: '18.03.2000',
    gender: 'Woman',
    is_auth: true,
    type: 'Moderator'
}