import React, {useEffect, useRef, useState} from 'react';
import {debounce, fromEvent, timer} from "rxjs";
import cn from 'classnames'

import search_icon from './assets/search-icon.png'

import './style/search.scss'

const Search = () => {

    const input = useRef<HTMLInputElement>()

    const [isFocused, setIsFocused] = useState<boolean>(false)

    useEffect(() => {
        const subscriber = fromEvent(input.current, 'input')
            .pipe(
                debounce(() => timer(300))
            ).subscribe(changeInput)

        return () => {
            subscriber.unsubscribe()
        }
    }, [])

    const onFocus = () => {
        setIsFocused(true)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const changeInput = () => {
        console.log('input change')
    }

    return (
        <div className={'search'}>
            <div className={'search__container'}>
                <input
                    className={'search__input'}
                    type={'text'}
                    placeholder={isFocused ? 'Введите запрос' : 'Поиск'}
                    defaultValue={''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={input}
                />
                <div className={cn(
                    'search__icon',
                    {
                        'search__icon_focused': isFocused
                    }
                    )}>
                    <img src={search_icon} alt={'icon'}/>
                </div>
            </div>
        </div>
    );
};

export default Search;