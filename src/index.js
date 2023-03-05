import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/router.js'
import './assets/styles/main.scss'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(<Router />)
