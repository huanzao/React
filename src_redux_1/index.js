import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import {counter} from './redux/reducers'
import App from './component/app'
import './index.css'
//生成一个store对象
const store=createStore(counter) //内部会第一次调用reducer函数得到初始state
console.log(store)
function myRender(){
    render(<App store={store} />,document.getElementById('root'))
}
myRender()
store.subscribe(myRender)