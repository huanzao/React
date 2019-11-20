import React,{Component} from 'react'
import * as actions from '../redux/actions'

export default class App extends Component{
    handHp=()=>{
        const number=this.select.value*1
        this.props.store.dispatch(actions.up(number))
    }
    handDown=()=>{
        const number=this.select.value*1
        this.props.store.dispatch(actions.down(number))
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