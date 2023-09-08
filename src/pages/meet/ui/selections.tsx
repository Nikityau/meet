import React from 'react';
import {isMobile} from "react-device-detect";

import Selection from "../../../entities/selection";
import MobileSelections from "../ui-mobile/mobile-selections";
import {useSelections} from "../helpers/hooks/use-selections";

const Selections = () => {

   const {tags, onClick, isChosen} = useSelections()


    return (
        <div className={'selections'}>
            <div className={'selections__title'}>
                <span>Подборки</span>
            </div>
            {
                isMobile
                    ? <MobileSelections/>
                    :
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
            }
        </div>
    );
};

export default Selections;