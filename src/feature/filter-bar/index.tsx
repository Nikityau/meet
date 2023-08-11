import React from 'react';
import cn from 'classnames'

import Button from "../../shared/ui/button/button";
import CloseBtn from "./ui/close-btn";
import Title from "./ui/title";
import Location from "./ui/location";
import Tags from "./ui/tags";
import {debounce} from "../../shared/helpers/debounce";
import SquareCalendar from "../square-calendar";

import bg from './assets/bg.png'

import './style/index.scss'

export type FilterBarProps = {
    isOpen: boolean,
    close: () => void
}

const FilterBar = (
    {
        isOpen,
        close
    }: FilterBarProps) => {

    return (
        <div className={cn(
            'filter-bar',
            isOpen ? 'filter-bar_open' : 'filter-bar_close'
        )}
             style={{
                 backgroundImage: `url(${bg})`
             }}
        >
            <div className={'filter-bar__container'}>
                <CloseBtn onClick={close}/>
                <Title/>
                <Location
                    onChangeLocation={debounce(() => {
                        console.log('changed')
                    }, 400)}
                />
                <Tags/>
                <SquareCalendar
                    onDateChange={debounce((d) => {
                        console.log('date changed', d)
                    }, 400)}
                />
                <Button
                    text={'Применить'}
                    onClick={() => {}}
                />
            </div>
        </div>
    );
};

export default FilterBar;