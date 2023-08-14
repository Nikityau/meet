import React from 'react'

import HorCalendar from "../../../widgets/hor-calendar";
import TodayEvent from "./today-event";
import SoonEvent from "./soon-event";
import Selections from "./selections";
import AdBanner from "../../../entities/ad-banner";

import rstu from '../assets/rstu.png'

import '../style/index.scss'

export const MeetPage = () => {
    return (
        <div className={'meet-page'}>
            <HorCalendar/>
            <div className={'meet-page__container app-container'}>
                <TodayEvent/>
                <SoonEvent/>
                <Selections/>
                <AdBanner ad={
                    <div className={'meet-page__ad'}
                        style={{
                            backgroundImage: `url(${rstu})`
                        }}
                    >
                    </div>
                }/>
            </div>
        </div>
    )
}
