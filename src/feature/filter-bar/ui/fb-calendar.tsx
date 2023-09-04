import React, {useEffect} from 'react';
import {debounce} from "../../../shared/helpers/debounce";
import SquareCalendar from "../../square-calendar";
import {SqState} from "../../square-calendar/react-reducer";
import {useFilterBarStore} from "../zustand";

const FbCalendar = () => {

    const {dispatch} = useFilterBarStore()

    const onSqChange = (data:SqState) => {
        dispatch({
            type: "filterMeet/dates-set",
            payload: data.chosenDates
        })
    }

    return (
        <SquareCalendar
            onDateChange={debounce((d) => {
                onSqChange(d)
            }, 400)}
        />
    );
};

export default FbCalendar;