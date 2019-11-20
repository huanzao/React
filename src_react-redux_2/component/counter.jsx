import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class Counter extends Component{

    static propTypes={
        count:PropTypes.number.isRequired,
        up:PropTypes.func.isRequired,
        down:PropTypes.func.isRequired,
    }

    handHp=()=>{
        const number=this.select.value*1
        // this.props.store.dispatch(actions.up(number))
        this.props.up(number)
    }

    handDown=()=>{
        const number=this.select.value*1
        this.props.down(number)
    }

    render(){
        // const count=this.props.store.getState()
        const count=this.props.count
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
