import React, {useContext, useRef} from 'react';
import {useSelector} from "react-redux";
import cn from 'classnames'

import {MonthContext} from "./index";

import {isAppInitSelector} from "../../../app-store-global/is-init";

const Line = () => {

    const context = useContext(MonthContext)

    const isAppInit = useSelector(isAppInitSelector)

    const ref = useRef<HTMLDivElement>()

    return (
        <div className={cn(
            'month-line',
            {
                'month-line_anim': isAppInit
            }
        )}
             ref={ref}
             style={{
                 transform: `translate(${context.offset - (ref.current?.clientWidth || 0) / 2}px,0)`
             }}>
        </div>
    );
};

export default Line;