import React from 'react';
import {useToggle} from "../../../shared/helpers/hooks/useToggle";
import Selection from "../../../entities/selection";
import {useSelections} from "../helpers/hooks/use-selections";
import cn from "classnames";
import Button from "../../../shared/ui/button/button";
import {useSelector} from "react-redux";
import {tagsSelector} from "../../../redux/tags-store/tags-selector";

const Wrapper = ({children}:React.PropsWithChildren) => {
    const {is, f} = useToggle(false)
    const tags = useSelector(tagsSelector)

    return (
        <div className={cn(
            'selections-mob-wrapper',
            is ? 'selections-mob-wrapper_open'
                : 'selections-mob-wrapper_close'
        )}>
            <div className={'selections-mob-wrapper__list'}
                style={{
                    height: is ? tags.length * 75 + tags.length * 5 : 260
                }}
            >
                {children}
            </div>
            <div className={'selections-btn'}>
                <Button
                    children={
                        <span>
                            {
                                is
                                    ? 'Cкрыть'
                                    : 'Eщё'
                            }
                        </span>
                    }
                    onClick={f.swtch}
                />
            </div>
        </div>
    )
}

const MobileSelections = () => {

    const {tags, onClick, isChosen} = useSelections()

    return (
       <Wrapper>
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
       </Wrapper>
    );
};

export default MobileSelections;