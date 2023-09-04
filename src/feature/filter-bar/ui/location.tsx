import React, {useEffect, useState} from 'react';

import loc_img from '../assets/loc.png'
import {useFilterBarStore} from "../zustand";
import {debounce} from "../../../shared/helpers/debounce";

type LocationProps = {}

const Location = ({}: LocationProps) => {
    const [loc, setLoc] = useState<string>('')

    const {filters, dispatch} = useFilterBarStore()

    useEffect(() => {
        if(!filters || !filters?.location) {
            setLoc("")
        }
    }, [filters])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoc(e.target.value)
        debounce(
            dispatch({
                type: "filterMeet/location",
                payload: e.target.value
            }),
            500
        )
    }

    return (
        <div className={'filter-bar__location'}>
            <input
                value={loc}
                onChange={onChange}
                placeholder={'Место'}
            />
            <img src={loc_img} alt={'loc'}/>
        </div>
    );
};

export default Location;