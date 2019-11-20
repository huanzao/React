import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class Search extends Component{

    static propsTypes={
        setSearchName:PropTypes.func.isRequired
    }
    handSearch=()=>{
        console.log(this.input.value)
        const searchVla=this.input.value
        if(searchVla){
            this.props.setSearchName(searchVla)
        }
    }
    render(){
        return(
            <div>
                <input type="text" placeholder='在这里输入' ref={input=>this.input=input}/>
                <input type="button" value='search'  onClick={this.handSearch} />
            </div>
        )
    }
}