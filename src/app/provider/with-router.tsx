import React, {PropsWithChildren} from "react";
import {BrowserRouter} from 'react-router-dom'


const WithRouter= ({children}: PropsWithChildren) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

export default WithRouter