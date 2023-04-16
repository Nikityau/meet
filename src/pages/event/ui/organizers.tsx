import React from 'react';

import Organizer from "./organizer";

import {dataOrganizers} from "../model/data";

const Organizers = () => {
    return (
        <div className={'event__organizers'}>
            <div className={'event__organizers-title'}>
                <span>Организаторы</span>
            </div>
            <div className={'event__organizers-list'}>
                {
                    dataOrganizers.map(org => (
                        <Organizer
                            key={org.id}
                            id={org.id}
                            img={org.img}
                            type={org.type}
                            canMessage={org.canMessage}
                            name={org.name}
                            patronymic={org.patronymic}
                            surname={org.surname}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Organizers;