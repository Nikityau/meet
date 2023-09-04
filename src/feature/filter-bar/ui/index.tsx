import React, {useContext} from 'react';
import {useFilterBar} from "../helpers/hooks/use-filter-bar";
import {FbContext} from "../provider/fb-context";
import cn from "classnames";
import bg from "../assets/bg.png";
import CloseBtn from "./close-btn";
import Title from "./title";
import Location from "./location";
import Tags from "./tags";
import FbCalendar from "./fb-calendar";
import Button from "../../../shared/ui/button/button";

const FBIndex = () => {
    const {
        onCloseClick,
        onMouseIn,
        onMouseOut
    } = useFilterBar()

    const cntx = useContext(FbContext)

    return (
        <div className={cn(
            'filter-bar',
        )}
             style={{
                 backgroundImage: `url(${bg})`
             }}
             onMouseEnter={onMouseIn}
             onMouseLeave={onMouseOut}
        >
            <div className={'filter-bar__container'}>
                <CloseBtn onClick={onCloseClick}/>
                <Title/>
                <Location/>
                <Tags/>
                <FbCalendar/>
                <Button
                    onClick={() => cntx.onApply()}
                    children={
                        <span>
                            Применить
                        </span>
                    }
                />
            </div>
        </div>
    );
};

export default FBIndex;