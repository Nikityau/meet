import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {dataThemes} from "../data/data-themes";
import ThemeBoilerplate from "./theme-boilerplate";
import {AdditionalColor, MainColor} from "../../../redux/theme-store/theme-state";
import {useDispatch} from "react-redux";

const Themes = () => {

    const dispatch = useDispatch()

    const onThemeClick = (main: MainColor, adddon: AdditionalColor) => {
        // dispatch theme
    }

    return (
        <div className={'settings-view__themes'}>
            <div className={'settings-view__themes-container'}>
                <Swiper
                    slidesPerView={'auto'}
                >
                    {
                        dataThemes.map((dt, i) => (
                            <SwiperSlide
                                key={dt.additionalColor + dt.mainColor + i}
                            >
                                <ThemeBoilerplate
                                    onClick={onThemeClick}
                                    mainColor={dt.mainColor}
                                    additionalColor={dt.additionalColor}
                                />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Themes;