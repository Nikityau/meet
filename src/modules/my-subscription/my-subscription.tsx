import React from 'react';

import Title from "../../ui/components/title/title";
import Events from "./components/events/events";

import './style/my-subscription.scss'

const MySubscription = () => {
    return (
        <div className={'my-subscription'}>
            <Title title={'Мои подписки'}/>
            <Events/>
        </div>
    );
};

export default MySubscription;