import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class Search extends Component{
   
    static ropTypes={
        IsShow:PropTypes.func.isRequired,
        inputSearch:PropTypes.func.isRequired
    }
    handChange=()=>{
        this.props.IsShow(this.checkbox.checked)
    }
    inputSelect=()=>{
        this.props.inputSearch(this.input.value)
        console.log(12121)
    }
    render(){
        return(
            <div>
                <input type="text" ref={input=>this.input=input} onChange={this.inputSelect} />
                <br/>
                <input type="checkbox" ref={checkbox=>this.checkbox=checkbox} onChange={this.handChange} /><span>Only show products in stock</span>
            </div>
        )
    }
}