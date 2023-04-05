import React from 'react';
import {Provider} from "react-redux";

import {store} from "../store";

const WithStore = (component: () => React.ReactNode) => {
    return () => {
        return (
            <Provider store={store}>
                { component() }
            </Provider>
        );
    }
};

export default WithStore;