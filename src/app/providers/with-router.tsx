import React, {Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";

const WithRouter = (component: () => React.ReactNode) => {
    return () => {
        return (
            <BrowserRouter>
                <Suspense fallback={"Loading..."}>
                    {component()}
                </Suspense>
            </BrowserRouter>
        );
    }
};

export default WithRouter;