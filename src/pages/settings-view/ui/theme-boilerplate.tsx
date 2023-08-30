import React from 'react';
import cn from 'classnames'
import {useSelector} from "react-redux";
import {AdditionalColor, MainColor} from "../../../redux/theme-store/theme-state";
import {themeSelector} from "../../../redux/theme-store/theme-selector";

type ThemeBoilerplateProps = {
    mainColor: MainColor,
    additionalColor: AdditionalColor,
    onClick: (mainColor: MainColor, addonColor: AdditionalColor) => void
}

const BPSquare = () => {
    return (
        <div className={'theme-boilerplate__sq'}>
        </div>
    )
}

const BPCircle = () => {
    return (
        <div className={'theme-boilerplate__circle'}>

        </div>
    )
}

const ThemeBoilerplate = ({mainColor, additionalColor, onClick}: ThemeBoilerplateProps) => {

    const theme = useSelector(themeSelector)

    const isCurrent = ():boolean => {
        if(
            mainColor == theme.mainColor &&
            additionalColor == theme.additionalColor
        )
            return true

        return false
    }

    const onThemeClick = () => {
        onClick(mainColor, additionalColor)
    }

    return (
        <div className={cn(
            'theme-boilerplate',
            `theme-boilerplate_main_${mainColor}`,
            `theme-boilerplate_addon_${additionalColor}`,
            isCurrent() ? 'theme-boilerplate_current' : ''
        )} onClick={onThemeClick}>
            <div className={'theme-boilerplate__sq-list'}>
                <BPSquare/>
                <BPSquare/>
            </div>
            <div className={'theme-boilerplate__circle-list'}>
                <BPCircle/>
                <BPCircle/>
                <BPCircle/>
                <BPCircle/>
            </div>
            <div className={'theme-boilerplate__btn-container'}>
                <div className={'theme-boilerplate__btn'}/>
            </div>
        </div>
    );
};

export default ThemeBoilerplate;