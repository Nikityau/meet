import React, {useState} from 'react';
import cn from "classnames";
import produce from "immer";

import Category from "../../features/category";

import {useCreateEvent} from "../../pages/create-post/helpers/hooks/useCreateEvent";
import {EventObject} from "../../pages/create-post/controller/type/type";
import {CreateCategoryService} from "../../pages/create-post/service/create-category.service";
import {CreateEventController} from "../../pages/create-post/controller/create-event.controller";

import {categoriesData} from "./model/categories";

import './style/index.scss'

const CreateEventCategory = () => {

    const [categories, setCategories] = useState<string[]>(() => {
        const c = CreateEventController.GET().getStateByKey('category')

        return !c ? [] : c
    })
    const {status, dispatch} = useCreateEvent<EventObject>('category', new CreateCategoryService())

    const isChosen = (category: string): boolean => {
        return categories.includes(category)
    }

    const onClickCategory = (category) => {
        const state = produce(categories, draft => {
            if(draft.includes(category)) {
                return draft.filter(c => c != category)
            }

            draft.push(category)

            return draft
        })

        setCategories(state)
        dispatch(state)
    }

    return (
        <div className={cn(
            'create-event-category',
            {
                'create-event-category_error': status.error
            }
        )}>
            {
                categoriesData.map(c =>
                    <Category
                        key={c.id}
                        title={c.category}
                        isCurrent={isChosen(c.category)}
                        onClick={onClickCategory}
                    />
                )
            }
        </div>
    );
};

export default CreateEventCategory;