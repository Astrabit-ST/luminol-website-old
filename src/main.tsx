import '../styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Application } from './components/App'

const body = document.getElementById('react-root')
const root = ReactDOM.createRoot(body)
root.render(<Application />)
