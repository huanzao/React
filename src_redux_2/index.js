import React from 'react'
import {render} from 'react-dom'
import store from './redux/store'
import App from './component/app'
import './index.css'

function myRender(){
    render(<App store={store} />,document.getElementById('root'))
}
myRender()
store.subscribe(myRender)