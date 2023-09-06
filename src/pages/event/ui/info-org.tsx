import React from 'react';
import {useEventStore} from "../zustand";

const InfoOrg = () => {

    const {data} = useEventStore()

    return (
        <>
            {
                data && data.organizers.map(d => (
                    <div className={'info-org'} key={d.id}>
                        <div className={'info-org__image'}
                             style={{
                                 backgroundImage: `url(${d.avatar})`
                             }}
                        >
                        </div>
                        <div className={'info-org__info'}>
                            <div className={'info-org__name'}>
                                <span>{d.name + ' ' + d.surname + ' ' + d.patronymic}</span>
                            </div>
                            <div className={'info-org__role'}>
                                <span>{d.role}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default InfoOrg;