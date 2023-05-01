import React from "react";

import {v4} from "uuid";

import {EventStage} from "../controller/type/type";

import CreatePostTitle from '../ui/create-post-title'

export const eventStages: EventStage[] = [
    {
        id: v4(),
        number: 1,
        uniqueName: 'title',
        renderNode: <CreatePostTitle/>
    },
    {
        id: v4(),
        number: 2,
        uniqueName: 'wrapper',
        renderNode: null
    },
    {
        id: v4(),
        number: 3,
        uniqueName: 'description',
        renderNode: null
    },
    {
        id: v4(),
        number: 4,
        uniqueName: 'date',
        renderNode: null
    },
    {
        id: v4(),
        number: 5,
        uniqueName: 'location',
        renderNode: null
    },
    {
        id: v4(),
        number: 6,
        uniqueName: 'category',
        renderNode: null
    },
    {
        id: v4(),
        number: 7,
        uniqueName: 'feedback',
        renderNode: null
    }
]