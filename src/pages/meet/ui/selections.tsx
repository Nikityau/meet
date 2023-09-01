import React from 'react';
import Selection from "../../../entities/selection";
import {useFilterMeet} from "../../../local-states/filter-meet";
import {useSelector} from "react-redux";
import {tagsSelector} from "../../../redux/tags-store/tags-selector";

const Selections = () => {

    const {filters, setFilter} = useFilterMeet()
    const tags = useSelector(tagsSelector)

    const onClick = (tag: string, is: boolean) => {
        if(is) {
            setFilter({
                type: "filterMeet/tags-remove",
                payload: tag
            })

            return
        }

        setFilter({
            type: "filterMeet/tags-add",
            payload: tag
        })
    }

    const isChosen = (tag: string): boolean => {
        if(filters != null && filters.tags != null) {
            for(let t of filters.tags) {
                if(t == tag) {
                    return true
                }
            }
        }

        return false
    }


    return (
        <div className={'selections'}>
            <div className={'selections__title'}>
                <span>Подборки</span>
            </div>
            <div className={'selections__list'}>
                {
                    tags.map(data => (
                        <Selection
                            key={data.id}
                            id={data.id}
                            text={data.tag}
                            onClick={onClick}
                            isChosen={isChosen(data.tag)}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Selections;