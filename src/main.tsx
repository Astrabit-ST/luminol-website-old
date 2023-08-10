import '../styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Application } from './components/App'

const body = document.getElementById('react-root')
if(body == null) {
    console.error("<div id=\"react-root\"> element doesn't exist")
} else {
    const root = ReactDOM.createRoot(body)
    root.render(<Application />)
}
