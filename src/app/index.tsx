import React from "react";

import WithRouter from "./provider/with-router";
import WithStore from "./provider/with-store";

import AppRouter from "pages";

import './style/fonts.scss'
import './style/base.scss'
import './style/custom-scrollbar.scss'

const App = () => {
    return (
       <WithStore>
           <WithRouter>
               <AppRouter/>
           </WithRouter>
       </WithStore>
    );
};

export default App;