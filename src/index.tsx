import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./app/app";

import './assets/fonts/fonts.scss'
import './ui/styles/global/default.scss'
import './ui/styles/global/root.scss'
import './ui/styles/theme/dark.scss'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <App></App>
)