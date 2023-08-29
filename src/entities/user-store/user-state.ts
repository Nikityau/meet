import {v4} from "uuid";

import avatar_img from './assets/avatar-m.png'

export interface UserState {
    id: string,
    name: string,
    surname: string,
    avatar: string,
    role: 'user' | 'moderator' | 'admin',
    dateBirth: Date,
    gender: 'male' | 'female',
    email: string,
    isConfirmed: boolean,
}

export const userState: UserState = {
    id: v4(),
    name: "Evelin",
    surname: "Parker",
    avatar: avatar_img,
    role: 'moderator',
    email: 'evmilf@mail.com',
    gender: 'female',
    dateBirth: new Date(),
    isConfirmed: false
}