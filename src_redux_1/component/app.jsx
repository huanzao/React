import React,{Component} from 'react'
import {UP,DOWN} from '../redux/actions-types'
export default class App extends Component{
    
    handHp=()=>{
        const number=this.select.value*1
        this.props.store.dispatch({type:UP,data:number})
    }
    handDown=()=>{
        const number=this.select.value*1
        this.props.store.dispatch({type:DOWN,data:number})
    }
    render(){
        const count=this.props.store.getState()
        return(
            <div>
            <h1>点击次数{count}</h1>
                <hr/>
                <select ref={select=>this.select=select}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button onClick={this.handHp}>+</button>
                <button onClick={this.handDown}>-</button>
            </div>
        )
    }
}