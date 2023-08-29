import React, {PropsWithChildren} from 'react';
import store from "../store";
import {Provider} from "react-redux";

const WithStore = ({children}:PropsWithChildren) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default WithStore;