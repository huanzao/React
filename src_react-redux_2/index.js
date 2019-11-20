import React from 'react'
import {render} from 'react-dom'
import store from './redux/store'
import App from './connters/app'
import {Provider} from 'react-redux'
import './index.css'


render((
    <Provider  store={store} >
        <App />
    </Provider>
),document.getElementById('root'))

