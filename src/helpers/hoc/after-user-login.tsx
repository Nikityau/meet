import React from 'react';
import {useSelector} from "react-redux";

import {getUser} from "../../features/user";

type AfterUserLoginProps = {
    fallback: React.ReactElement | null
} & React.PropsWithChildren

const AfterUserLogin = ({fallback, children}: AfterUserLoginProps) => {

    const isUserLogin = useSelector(getUser)

    return (
        <>
            {
                isUserLogin
                    ? children
                    : fallback
            }
        </>
    );
};

export default AfterUserLogin;