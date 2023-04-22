import React from 'react';
import {useSelector} from "react-redux";
import cn from "classnames";

import {getSideBarState} from "widgets/side-bar/model";

const EventProvider = ({children}:React.PropsWithChildren) => {
    const sideBarState = useSelector(getSideBarState)

    return (
        <div className={cn(
            'event',
            {
                'event_narrow': sideBarState
            }
        )}>
            {children}
        </div>
    );
};

export default EventProvider;