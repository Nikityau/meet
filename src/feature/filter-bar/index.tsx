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
import {useFilterBar} from "./helpers/hooks/use-filter-bar";

export type FilterBarProps = {
}

const FilterBar = ({}: FilterBarProps) => {

    const {
        onCloseClick,
        onMouseIn,
        onMouseOut
    } = useFilterBar()

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
                    onClick={() => {
                        console.log('ok')
                    }}
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

export default FilterBar;