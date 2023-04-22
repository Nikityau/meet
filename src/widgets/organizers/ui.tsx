import React from 'react';

import {OrganizerProps} from "entities/organizer/ui";

import {Organizer} from "entities/organizer";
import {MessageMini} from "features/message-mini";

import './style/index.scss'

type OrganizersProps = {
    organizers: OrganizerProps[]
}

const Organizers: React.FC<OrganizersProps> = ({organizers}) => {
    return (
        <div className={'organizers'}>
            <div className={'organizers__title'}>
                <span>Организаторы</span>
            </div>
            <div className={'organizers__list'}>
                {
                    organizers.map(org => (
                        <Organizer
                            key={org.id}
                            id={org.id}
                            img={org.img}
                            name={org.name}
                            surname={org.surname}
                            patronymic={org.patronymic}
                            type={org.type}
                            Message={
                                <MessageMini id={org.id}/>
                            }
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Organizers;